import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PICKUP_DATE, DELIVER_DATE } from './OrderConstants';
import { addDays } from 'date-fns';
import { translate } from 'react-i18next';
import { setDate } from './OrderActions';
import { connect } from 'react-redux';
import './style.css';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import Page from '../index';
import pickupImg from '../../assets/images/pickup.png';

export class DateComponent extends Component {
  setDate = (date, type) => {
    this.props.setDate(date, type);
  };

  render() {
    const { pickupDate, deliverDate, t } = this.props;
    let _pD, _dD;
    if (pickupDate) {
      _pD = new Date(pickupDate);
    }
    if (deliverDate) {
      _dD = new Date(deliverDate);
    }
    return (
      <Page>
        <div className="main-section align-content-center flex-wrap fancy-bg">
          <div className="order-form-wrapper form-wrapper m-2 mx-auto p-2">
            <div className="row"><img alt="laundry" className="pickup-img" src={pickupImg} /></div>
            <div className="date-picker-wrapper row">
              <div className="col-6">
                <DatePicker
                  placeholderText={t('Pickup date')}
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
              <div className="col-md-6 mb-2">
                <NavLink className="nav-button" to="/">
                  <Button fullWidth color="secondary" variant="contained">
                    {t('Back to home page')}
                  </Button>
                </NavLink>
              </div>
              <div className="col-md-6">
                {!deliverDate && (
                  <Button disabled fullWidth variant="contained">
                    {t('Order')}
                  </Button>
                )}
                {deliverDate && (
                  <NavLink className="nav-button" to="/order">
                    <Button
                      disabled={!deliverDate}
                      fullWidth
                      color="primary"
                      variant="contained"
                    >
                      {t('Order')}
                    </Button>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

DateComponent = connect(
  state => ({ ...state.order }),
  { setDate }
)(DateComponent);

export default translate('translations')(DateComponent);
