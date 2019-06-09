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
    this.username = React.createRef();
    this.address = React.createRef();
    this.zipcode = React.createRef();
  }

  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { t, user } = this.props;
    const { email, mobile, address, zipcode } = user;
    return (
      <div className="m-2">
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <input
                defaultValue={email}
                className={classnames('form-control')}
                required
                ref={this.email}
                placeholder="Email"
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
                placeholder="Mobile"
                type="mobile"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                defaultValue={address}
                required
                className={classnames('form-control')}
                ref={this.address}
                placeholder="Address"
                type="text"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                required
                defaultValue={zipcode}
                className={classnames('form-control')}
                ref={this.zipcode}
                placeholder="Zip code"
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
