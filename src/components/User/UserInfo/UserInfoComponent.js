import React, { Component } from 'react';
import classnames from 'classnames';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import { translate } from 'react-i18next';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
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

export class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.country = React.createRef();
    this.city = React.createRef();
    this.apartment = React.createRef();
    this.companyName = React.createRef();
    this.email = React.createRef();
    this.phone = React.createRef();
    this.address = React.createRef();
    this.zip = React.createRef();
    this.username = React.createRef();
  }

  onSubmit = event => {
    event.preventDefault();
    const { userUpdate, onSaveHandler } = this.props;
    userUpdate({
      username: this.username.current.value,
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      country: this.country.current.value,
      city: this.city.current.value,
      apartment: this.apartment.current.value,
      companyName: this.companyName.current.value,
      email: this.email.current.value,
      phone: this.phone.current.value,
      address: this.address.current.value,
      zip: this.zip.current.value
    });
    if (typeof onSaveHandler === 'function') {
      onSaveHandler(true);
    }
  };

  render() {
    const {
      t,
      firstName,
      lastName,
      country,
      city,
      apartment,
      email,
      username,
      phone,
      address,
      zip,
      companyName
    } = this.props;
    return (
      <div className="m-2">
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <input
                defaultValue={firstName}
                className={classnames('form-control')}
                required
                ref={this.firstName}
                placeholder={t('First name')}
                type="text"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                defaultValue={lastName}
                className={classnames('form-control')}
                required
                ref={this.lastName}
                placeholder={t('Last name')}
                type="text"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                defaultValue={username}
                className={classnames('form-control')}
                required
                ref={this.username}
                placeholder={t('Username')}
                type="text"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                defaultValue={email}
                className={classnames('form-control')}
                required
                ref={this.email}
                placeholder={t('Email')}
                type="email"
                pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
              />
            </div>
            <div className="form-group col-md-6">
              <select
                defaultValue={country}
                className={classnames('form-control')}
                required
                ref={this.country}
                placeholder={t('Country')}
              >
                <option>Netherlands</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <input
                defaultValue={city}
                className={classnames('form-control')}
                required
                ref={this.city}
                placeholder={t('City')}
                type="text"
              />
            </div>
            <div className="form-group col-md-6">
              <textarea
                defaultValue={address}
                required
                className={classnames('form-control')}
                ref={this.address}
                placeholder={t('Address')}
                type="text"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                defaultValue={apartment}
                className={classnames('form-control')}
                ref={this.apartment}
                placeholder={t('Apartment')}
                type="text"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                required
                defaultValue={phone}
                ref={this.phone}
                className={classnames('form-control')}
                placeholder={t('Mobile')}
                type="phone"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                required
                defaultValue={zip}
                className={classnames('form-control')}
                ref={this.zip}
                placeholder={t('Zip code')}
                type="text"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                required
                defaultValue={companyName}
                className={classnames('form-control')}
                ref={this.companyName}
                placeholder={t('Company name')}
                type="text"
              />
            </div>
            <div className="form-group col-md-6">
              <MuiThemeProvider theme={theme}>
                <Button type="submit" variant="contained" color="primary">
                  {t('Save')}
                </Button>
              </MuiThemeProvider>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default translate('translations')(withStyles(styles)(UserInfo));
