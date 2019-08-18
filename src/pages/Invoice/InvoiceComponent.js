import React, { Component } from 'react';
import classnames from 'classnames';
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
import { ADD_ORDER_SUCCESS, ADD_ORDER_FAILURE } from '../Order/OrderConstants';
import SnackbarComponent from '../../utils/Snackbar/SnackbarComponent';

export class InvoiceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { editUserInfo: false, redirectUrl: '', snackBar: false };
  }
  saveHandler = isSave => {
    this.setState({ editUserInfo: false });
  };

  componentDidMount() {
    const { history, selectedProducts } = this.props;
    if (Object.keys(selectedProducts).length === 0) {
      history.push('order');
    }
  }

  paymentHandler = () => {
    const { addOrder, i18n } = this.props;
    addOrder(i18n.language).then(data => {
      if (data.type === ADD_ORDER_SUCCESS) {
        window.location.href = data.response;
        this.setState({ redirectUrl: data.response });
      } else if (data.type === ADD_ORDER_FAILURE) {
        this.setState({ snackBar: true, message: data.error });
      }
    });
  };

  render() {
    const { jwt, t, pickupDate, deliverDate } = this.props;
    return (
      <Page>
        <div className=" d-flex align-content-center fancy-bg">
          <div className="invoice-form-wrapper m-2 mx-auto p-2">
            <DateShow pickupDate={pickupDate} deliverDate={deliverDate} />
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
              <div className={classnames('mb-2', jwt ? 'col-md-6' : 'col-12')}>
                <NavLink className="nav-button" to="/order">
                  <Button fullWidth color="secondary" variant="contained">
                    {t('Back to Order')}
                  </Button>
                </NavLink>
              </div>
              {jwt && (
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
              )}
              {this.state.redirectUrl && (
                <div className="text-center col-12">
                  <span>
                    {t('if your wont be redirected in five seconds, ')}
                  </span>
                  <span>
                    <a href={this.state.redirectUrl}>
                      {t('click on this link.')}
                    </a>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <SnackbarComponent
          onHandlerClose={e => this.setState({ snackBar: false })}
          snackbarMessage={this.state.message}
          isSnackbarOpen={this.state.snackBar}
        />
      </Page>
    );
  }
}
export let DateShow = ({ deliverDate, pickupDate, t }) => {
  return (
    <div className="row date-information">
      {pickupDate && (
        <div className="col-md-6">
          {`${t('Pickup date')}: ${moment(pickupDate).format(
            'MMMM D, YYYY HH:mm'
          )}`}
        </div>
      )}
      {deliverDate && (
        <div className="col-md-6">
          {`${t('Deliver date')}: ${moment(deliverDate).format(
            'MMMM D, YYYY HH:mm'
          )}`}
        </div>
      )}
    </div>
  );
};
export let UserInfo = props => {
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
    onHandleEditUserClick,
    readOnly
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
      {!readOnly && (
        <div className="col-md-12">
          <Button
            color="primary"
            variant="contained"
            onClick={onHandleEditUserClick}
          >
            {t('Edit Information')}
          </Button>
        </div>
      )}
    </div>
  );
};

UserInfo = translate('translations')(UserInfo);
DateShow = translate('translations')(DateShow);
export default withRouter(translate('translations')(InvoiceComponent));
