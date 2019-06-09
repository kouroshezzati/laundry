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
    this.email = React.createRef();
    this.mobile = React.createRef();
    this.address = React.createRef();
    this.zipcode = React.createRef();
    this.username = React.createRef();
  }

  onSubmit = event => {
    event.preventDefault();
    const { user, userUpdate, onSaveHandler } = this.props;
    userUpdate({
      id: user._id,
      email: this.email.current.value,
      username: this.username.current.value,
      mobile: this.mobile.current.value,
      address: this.address.current.value,
      zipcode: this.zipcode.current.value
    });
    if (typeof onSaveHandler === 'function') {
      onSaveHandler(true);
    }
  };

  render() {
    const { t, user } = this.props;
    const { username, email, mobile, address, zipcode } = user;
    return (
      <div className="m-2">
        <form onSubmit={this.onSubmit}>
          <div className="row">
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
              <input
                required
                defaultValue={mobile}
                ref={this.mobile}
                className={classnames('form-control')}
                placeholder={t('Mobile')}
                type="mobile"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                required
                defaultValue={zipcode}
                className={classnames('form-control')}
                ref={this.zipcode}
                placeholder={t('Zip code')}
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
