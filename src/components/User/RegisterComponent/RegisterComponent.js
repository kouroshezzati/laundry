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

    this.state = { snackBar: false, isSubmitted: false, message: '' };
  }
  onSubmit = event => {
    event.preventDefault();
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
      zip: this.country.current.value,
      phone: this.country.current.value,
      companyName: this.country.current.value
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
        this.phone.current.value = '';
        this.password.current.value = '';
        this.confirm_password.current.value = '';
        this.address.current.value = '';
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
          <div className="form-group">
            <input
              className={classnames('form-control')}
              required
              ref={this.username}
              placeholder={t('User name')}
            />
          </div>
          <div className="form-group">
            <input
              className={classnames('form-control')}
              required
              ref={this.email}
              placeholder={t('Email')}
              type="email"
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            />
            <small id="emailHelp" className="form-text text-muted">
              {t("email.privacy")}
            </small>
          </div>
          <div className="form-group">
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
          <div className="form-group">
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
          <div className="form-group">
            <input
              required
              ref={this.phone}
              className={classnames('form-control')}
              placeholder={t('Phone')}
              type="phone"
            />
          </div>
          <div className="form-group">
            <input
              required
              className={classnames('form-control')}
              ref={this.address}
              placeholder={t('Address')}
              type="text"
            />
          </div>
          <div className="form-group">
            <MuiThemeProvider theme={theme}>
              <Button type="submit" variant="contained" color="primary">
                {t('Submit')}
              </Button>
            </MuiThemeProvider>
            {location.pathname === '/register/' && (
              <NavLink className="float-right" to="/">
                {t('Home')}
              </NavLink>
            )}
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
