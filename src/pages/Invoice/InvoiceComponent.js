import React, { Component } from 'react';
import { translate } from 'react-i18next';
import ProductList from '../../components/Products/ProductListContainer';
import Register from '../../components/User/RegisterComponent/RegisterContainer';
import Login from '../../components/User/LoginComponent/LoginComponent';
import './style.css';
import Button from '@material-ui/core/Button';
import UserInfoForm from '../../components/User/UserInfo/UserInfoContainer';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import Page from '../index';

export class InvoiceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { editUserInfo: false };
  }
  saveHandler = isSave => {
    this.setState({ editUserInfo: false });
  };
  
  paymentHandler = () => {
    this.props.addOrders();
  }

  render() {
    const { jwt, user, t, pickupDate, deliverDate} = this.props;
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
                {...user}
                t={t}
                onHandleEditUserClick={e =>
                  this.setState({ editUserInfo: true })
                }
              />
            )}
            {this.state.editUserInfo && (
              <UserInfoForm user={user} onSaveHandler={this.saveHandler} />
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
                <NavLink className="nav-button" to="/user/my_orders">
                  <Button
                    fullWidth
                    onClick={e => this.paymentHandler()}
                    color="primary"
                    variant="contained"
                  >
                    {t('Payment')}
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

const UserInfo = props => {
  const { username, email, mobile, zipcode, address, t, onHandleEditUserClick } = props;
  return (
    <div className="row m-1 user-info">
      <div className="col-md-4">
        <span className="label">{t('Username')}:</span>
        {username}
      </div>
      <div className="col-md-4">
        <span className="label">{t('Email')}:</span>
        {email}
      </div>
      <div className="col-md-4">
        <span className="label">{t('Mobile')}:</span>
        {mobile}
      </div>
      <div className="col-md-8">
        <span className="label">{t('Address')}:</span>
        {address}
      </div>
      <div className="col-md-4">
        <span className="label">{t('Zipcode')}:</span>
        {zipcode || ''}
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
export default translate('translations')(InvoiceComponent);
