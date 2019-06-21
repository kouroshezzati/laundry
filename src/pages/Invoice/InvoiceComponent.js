import React, { Component } from 'react';
import { translate } from 'react-i18next';
import ProductList from '../../components/Products/ProductListContainer';
import Register from '../../components/User/RegisterComponent/RegisterContainer';
import Login from '../../components/User/LoginComponent/LoginComponent';
import './style.css';
import Button from '@material-ui/core/Button';
import UserInfoForm from '../../components/User/UserInfo/UserInfoContainer';
import moment from 'moment';
import { NavLink, withRouter } from 'react-router-dom';
import Page from '../index';
import {
  ADD_ORDER_SUCCESS,
  ADD_INVOICE_SUCCESS
} from '../Order/OrderConstants';

export class InvoiceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { editUserInfo: false };
  }
  saveHandler = isSave => {
    this.setState({ editUserInfo: false });
  };

  paymentHandler = () => {
    const { resetOrderAndSelectedProducts, addOrder, addInvoice } = this.props;
    addOrder().then(data => {
      if (data.type === ADD_ORDER_SUCCESS) {
        addInvoice().then(_data => {
          if (_data.type === ADD_INVOICE_SUCCESS) {
            resetOrderAndSelectedProducts();
          }
        });
      }
    });
  };

  render() {
    const { jwt, t, pickupDate, deliverDate } = this.props;
    return (
      <Page>
        <div className=" d-flex align-content-center flex-wrap fancy-bg">
          <div className="invoice-form-wrapper m-2 mx-auto p-2">
            <div className="row date-information">
              {pickupDate && (
                <div className="col-md-6">
                  {`${t('Pickup date')}: ${moment(pickupDate).format(
                    'MMMM D, YYYY h:mm A'
                  )}`}
                </div>
              )}
              {deliverDate && (
                <div className="col-md-6">
                  {`${t('Deliver date')}: ${moment(deliverDate).format(
                    'MMMM D, YYYY h:mm A'
                  )}`}
                </div>
              )}
            </div>
            <ProductList invoice />
            {!jwt && (
              <div className="row m-2">
                <div className="col-md-6">
                  <Register />
                </div>
                <div className="col-md-6">
                  <Login />
                </div>
              </div>
            )}
            {jwt && !this.state.editUserInfo && (
              <UserInfo
                {...this.props}
                onHandleEditUserClick={e =>
                  this.setState({ editUserInfo: true })
                }
              />
            )}
            {this.state.editUserInfo && (
              <UserInfoForm {...this.props} onSaveHandler={this.saveHandler} />
            )}
            <div className="mt-3 row ">
              <div className="col-md-6 mb-2">
                <NavLink className="nav-button" to="/order">
                  <Button fullWidth color="secondary" variant="contained">
                    {t('Back to Order')}
                  </Button>
                </NavLink>
              </div>
              <div className="col-md-6 mb-2">
                <Button
                  fullWidth
                  onClick={e => this.paymentHandler()}
                  color="primary"
                  variant="contained"
                >
                  {t('Payment')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

const UserInfo = props => {
  const {
    username,
    email,
    phone,
    zip,
    address,
    t,
    firstName,
    apartment,
    lastName,
    country,
    city,
    companyName,
    onHandleEditUserClick
  } = props;
  return (
    <div className="row m-1 user-info">
      <div className="col-md-4">
        <span className="label">{t('First name')}:</span>
        {firstName}
      </div>
      <div className="col-md-4">
        <span className="label">{t('last Name')}:</span>
        {lastName}
      </div>
      <div className="col-md-4">
        <span className="label">{t('Username')}:</span>
        {username}
      </div>
      <div className="col-md-4">
        <span className="label">{t('Email')}:</span>
        {email}
      </div>
      <div className="col-md-4">
        <span className="label">{t('Country')}:</span>
        {country}
      </div>
      <div className="col-md-4">
        <span className="label">{t('City')}:</span>
        {city}
      </div>
      <div className="col-md-8">
        <span className="label">{t('Address')}:</span>
        {address}
      </div>
      <div className="col-md-4">
        <span className="label">{t('Apartment')}:</span>
        {apartment}
      </div>
      <div className="col-md-4">
        <span className="label">{t('Phone')}:</span>
        {phone}
      </div>
      <div className="col-md-4">
        <span className="label">{t('Zipcode')}:</span>
        {zip || ''}
      </div>
      <div className="col-md-4">
        <span className="label">{t('Company name')}:</span>
        {companyName}
      </div>
      <div className="col-md-12">
        <Button
          color="primary"
          variant="contained"
          onClick={onHandleEditUserClick}
        >
          {t('Edit Information')}
        </Button>
      </div>
    </div>
  );
};
export default withRouter(translate('translations')(InvoiceComponent));
