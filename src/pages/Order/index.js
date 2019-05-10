import React, { Component } from 'react';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';
import './style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PICKUP_DATE, DELIVER_DATE } from './OrderActions';
import { translate } from 'react-i18next';
import { addDays } from 'date-fns';
import ProductList from '../../components/Products/ProductListContainer';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
export class index extends Component {
  setDate = (date, type) => {
    this.props.setDate(date, type);
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { pickupDate, deliverDate, t, selectedProducts } = this.props;
    let _pD, _dD;
    if (pickupDate) {
      _pD = new Date(pickupDate);
    }
    if (deliverDate) {
      _dD = new Date(deliverDate);
    }
    let selectedProductNumbers = 0;
    _.map(selectedProducts, (value, key) => {
      selectedProductNumbers += value;
    });
    const isFormFilled = deliverDate && selectedProductNumbers > 0;
    return (
      <React.Fragment>
        <div className="vh-100 d-flex align-content-center flex-wrap fancy-bg">
          <NavbarComponent />
          <div className="order-form-wrapper mx-auto p-2">
            <div className="date-picker-wrapper row">
              <div className="col-6">
                <DatePicker
                  placeholderText={t('Picker date')}
                  selected={_pD}
                  onChange={date => {
                    this.setDate(date, PICKUP_DATE);
                  }}
                  minDate={new Date()}
                  className="mt-2 mb-2 form-control text-center"
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
              <div className="col-6">
                <DatePicker
                  placeholderText={t('Deliver date')}
                  className="mt-2 mb-2 form-control text-center"
                  selected={_dD}
                  minDate={addDays(pickupDate, 1)}
                  onChange={date => {
                    this.setDate(date, DELIVER_DATE);
                  }}
                  disabled={!pickupDate}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
            </div>
            <ProductList />
            <div className="mt-2 row ">
              <div className="col-md-6 mb-2">
                <NavLink className="nav-button" to="/">
                  <Button fullWidth color="secondary" variant="contained">
                    {t('Home')}
                  </Button>
                </NavLink>
              </div>
              <div className="col-md-6">
                {!isFormFilled && (
                  <Button disabled fullWidth variant="contained">
                    {t('Check out')}
                  </Button>
                )}
                {isFormFilled && (
                  <NavLink className="nav-button" to="/invoice">
                    <Button
                      disabled={!isFormFilled}
                      fullWidth
                      color="primary"
                      variant="contained"
                    >
                      {t('Check out')}
                    </Button>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default translate('translations')(index);
