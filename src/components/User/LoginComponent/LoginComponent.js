import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import './style.css';
import { connect } from 'react-redux';
import { login } from '../UserActions';
import { LOGIN_SUCCESS } from '../UserConstants';
import { translate } from 'react-i18next';

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

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
  }
  onSubmit = event => {
    event.preventDefault();
    const _data = {
      password: this.password.current.value,
      email: this.email.current.value
    };
    if (!_data.email || !_data.password) {
      return;
    }
    const { login, history, location } = this.props;
    login(_data.email, _data.password).then(data => {
      if (data.type === LOGIN_SUCCESS && location.pathname.includes('login')) {
        history.push('/');
      }
    });
  };
  componentDidMount(){
    const {jwt, history} = this.props;
    if (jwt) {
      history.push('/');
    }
  }

  render() {
    const { classes, t, message, location } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit} id="form2">
          <div className="form-group">
            <input
              type="text"
              required
              ref={this.email}
              className="form-control"
              placeholder="Email or Username"
            />
          </div>
          <div className="form-group">
            <input
              ref={this.password}
              type="password"
              required
              placeholder="Password"
              className="form-control"
            />
            {message && <small style={{ color: 'red' }}>{message}</small>}
          </div>
          <div className="form-group">
            <MuiThemeProvider theme={theme}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.margin}
              >
                {t('Submit')}
              </Button>
            </MuiThemeProvider>
            {location.pathname.includes('login') && (
              <NavLink className="float-right" to="/">
                {t('Home')}
              </NavLink>
            )}
          </div>
          <div style={{textAlign: 'center'}}><NavLink to="/forgotten-password">{t('Forgotten password?')}</NavLink></div>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ ...state.user }),
  { login }
)(translate('translations')(withRouter(withStyles(styles)(LoginComponent))));
