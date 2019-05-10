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
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';

export class InvoiceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { editUserInfo: false };
  }
  saveHandler = isSave => {
    this.setState({ editUserInfo: false });
  };
  render() {
    const { user, t, pickupDate, deliverDate } = this.props;
    return (
      <React.Fragment>
        <div className="vh-100 d-flex align-content-center flex-wrap fancy-bg">
          <NavbarComponent />
          <div className="invoice-form-wrapper mx-auto p-2">
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
            {!user.isLoggedin && (
              <div className="row m-2">
                <div className="col-md-6">
                  <Register />
                </div>
                <div className="col-md-6">
                  <Login />
                </div>
              </div>
            )}
            {user.isLoggedin &&
              !this.state.editUserInfo && (
                <UserInfo
                  user={user}
                  t={t}
                  onHandleEditUserClick={e =>
                    this.setState({ editUserInfo: true })
                  }
                />
              )}
            {this.state.editUserInfo && (
              <UserInfoForm user={user.user} onSaveHandler={this.saveHandler} />
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
                <NavLink className="nav-button" to="/">
                  <Button fullWidth color="primary" variant="contained">
                    {t('Payment')}
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const UserInfo = props => {
  const { user, t, onHandleEditUserClick } = props;
  return (
    <div className="row m-1 user-info">
      <div className="col-md-4">
        <span className="label">{t('Username')}:</span>
        {user.user.username}
      </div>
      <div className="col-md-4">
        <span className="label">{t('Email')}:</span>
        {user.user.email}
      </div>
      <div className="col-md-4">
        <span className="label">{t('Mobile')}:</span>
        {user.user.mobile}
      </div>
      <div className="col-md-8">
        <span className="label">{t('Address')}:</span>
        {user.user.address}
      </div>
      <div className="col-md-4">
        <span className="label">{t('Zipcode')}:</span>
        {user.user.zipcode || ''}
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
