import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { register } from '../UserActions';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import './style.css';
import { translate } from 'react-i18next';
import Snackbar from '../../../utils/Snackbar/SnackbarComponent';
import { REGISTER_SUCCESS } from '../UserConstants';

const styles = theme => ({
  margin: {
    fontSize: 14
  }
});

const theme = createMuiTheme({
  palette: {
    primary: green
  },
  typography: {
    useNextVariants: true
  }
});

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.username = React.createRef();
    this.address = React.createRef();
    this.phone = React.createRef();
    this.password = React.createRef();
    this.confirm_password = React.createRef();
    this.country = React.createRef();
    this.city = React.createRef();
    this.apartment = React.createRef();
    this.zip = React.createRef();
    this.companyName = React.createRef();

    this.state = { snackBar: false, isSubmitted: false, message: '' };
  }
  isZipNumber = () => {
    if (this.zip.current) {
      return !isNaN(this.zip.current.value);
    }
    return true;
  };
  onSubmit = event => {
    event.preventDefault();
    if (!this.isZipNumber()) {
      return;
    }
    this.setState({ isSubmitted: true });
    const _data = {
      username: this.username.current.value,
      email: this.email.current.value,
      password: this.password.current.value,
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      address: this.address.current.value,
      apartment: this.apartment.current.value,
      city: this.city.current.value,
      country: this.country.current.value,
      zip: parseInt(this.zip.current.value, 10),
      phone: this.phone.current.value,
      companyName: this.companyName.current.value
    };
    if (
      !_data.email ||
      !_data.username ||
      !_data.address ||
      !_data.phone ||
      !_data.password ||
      this.confirm_password.current.value !== _data.password
    ) {
      return;
    }
    const { register, t, location } = this.props;
    if (location.pathname !== '/register/') {
      return register({ ..._data });
    }
    register({ ..._data }).then(data => {
      if (data.type === REGISTER_SUCCESS) {
        this.username.current.value = '';
        this.email.current.value = '';
        this.password.current.value = '';
        this.confirm_password.current.value = '';
        this.firstName.current.value = '';
        this.lastName.current.value = '';
        this.address.current.value = '';
        this.apartment.current.value = '';
        this.city.current.value = '';
        this.country.current.value = '';
        this.zip.current.value = '';
        this.phone.current.value = '';
        this.companyName.current.value = '';
        this.setState({
          snackBar: true,
          message: t('You have been registered successfuly!')
        });
      } else {
        this.setState({ snackBar: true, message: t(data.message) });
      }
    });
  };
  checkPasswords() {
    return (
      this.state.isSubmitted &&
      this.password.current.value !== this.confirm_password.current.value
    );
  }
  render() {
    const { t, location } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  className={classnames('form-control')}
                  required
                  ref={this.firstName}
                  placeholder={t('First name')}
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  className={classnames('form-control')}
                  required
                  ref={this.lastName}
                  placeholder={t('Last name')}
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  className={classnames('form-control')}
                  required
                  ref={this.username}
                  placeholder={t('User name')}
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  className={classnames('form-control')}
                  required
                  ref={this.email}
                  placeholder={t('Email')}
                  type="email"
                  pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                />
                <small id="emailHelp" className="form-text text-muted">
                  {t('email.privacy')}
                </small>
              </div>
              <div className="form-group col-md-6">
                <input
                  required
                  className={classnames(
                    'form-control',
                    this.checkPasswords() ? 'is-invalid' : ''
                  )}
                  ref={this.password}
                  placeholder={t('Password')}
                  type="password"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  ref={this.confirm_password}
                  className={classnames(
                    'form-control',
                    this.checkPasswords() ? 'is-invalid' : ''
                  )}
                  type="password"
                  placeholder={t('Confirm the password')}
                  required
                  style={{
                    border: this.checkPasswords() ? '1px solid #dc3545' : ''
                  }}
                />
                {this.checkPasswords() && (
                  <small style={{ color: '#dc3545' }}>
                    {t('The passwords are not the same')}
                  </small>
                )}
              </div>
              <div className="form-group col-md-6">
                <select
                  className={classnames('form-control')}
                  required
                  ref={this.country}
                  placeholder={t('Country')}
                >
                  <option value="Netherlands">Netherlands</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <input
                  required
                  ref={this.city}
                  className={classnames('form-control')}
                  placeholder={t('City')}
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  required
                  className={classnames('form-control')}
                  ref={this.address}
                  placeholder={t('Address')}
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  required
                  className={classnames('form-control')}
                  ref={this.apartment}
                  placeholder={t('Apartment')}
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  required
                  pattern="[0-9]*"
                  className={classnames('form-control')}
                  ref={this.zip}
                  placeholder={t('Zip/Postcode')}
                  type="text"
                  style={{
                    border: !this.isZipNumber() ? '1px solid #dc3545' : ''
                  }}
                />
                {!this.isZipNumber() && (
                  <small style={{ color: '#dc3545' }}>
                    {t('The zip/postcode must be number!')}
                  </small>
                )}
              </div>
              <div className="form-group col-md-6">
                <input
                  required
                  ref={this.phone}
                  className={classnames('form-control')}
                  placeholder={t('Phone')}
                  type="phone"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  required
                  className={classnames('form-control')}
                  ref={this.companyName}
                  placeholder={t('Company name')}
                  type="text"
                />
              </div>
              <div className="form-group col-md-6">
                <MuiThemeProvider theme={theme}>
                  <Button type="submit" variant="contained" color="primary">
                    {t('Register')}
                  </Button>
                </MuiThemeProvider>
                {location.pathname === '/register/' && (
                  <NavLink className="float-right" to="/">
                    {t('Home')}
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </form>
        <Snackbar
          onHandlerClose={e => this.setState({ snackBar: false })}
          snackbarMessage={this.state.message}
          isSnackbarOpen={this.state.snackBar}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({}),
  { register }
)(translate('translations')(withStyles(styles)(withRouter(RegisterComponent))));
