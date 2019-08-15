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
import { login, getCustomer } from '../UserActions';
import {
  LOGIN_SUCCESS,
  GET_CUSTOMER_SUCCESS,
  LOGIN_FAILURE
} from '../UserConstants';
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
    this.state = { errorMessage: '' };
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
    const { getCustomer, login, history, location } = this.props;
    login(_data.email, _data.password).then(data => {
      if (data.type === LOGIN_SUCCESS) {
        getCustomer(data.response.userId).then(customerData => {
          if (
            customerData.type === GET_CUSTOMER_SUCCESS &&
            location.pathname.includes('login')
          ) {
            history.push('/');
          }
          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 0);
        });
      } else if (data.type === LOGIN_FAILURE) {
        if (typeof data.error === 'string') {
          this.setState({ errorMessage: data.error });
        } else {
          this.setState({ errorMessage: data.error.message });
        }
      }
    });
  };
  componentDidMount() {
    const { jwt, history } = this.props;
    if (jwt) {
      history.push('/');
    }
  }

  render() {
    const { classes, t } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit} id="form2">
          <div className="form-group">
            <input
              type="text"
              required
              ref={this.email}
              className="form-control"
              placeholder={t('Email or Username')}
            />
          </div>
          <div className="form-group">
            <input
              ref={this.password}
              type="password"
              required
              placeholder={t('Password')}
              className="form-control"
            />
            {this.state.errorMessage && (
              <div style={{ color: 'red', textAlign: 'center' }}>
                {this.state.errorMessage}
              </div>
            )}
          </div>
          <div className="form-group">
            <div className="float-left">
              <MuiThemeProvider theme={theme}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.margin}
                >
                  {t('Login')}
                </Button>
              </MuiThemeProvider>
            </div>
            <div style={{ paddingTop: '6px', float: 'right' }}>
              <NavLink to="/forgotten-password">
                {t('Forgotten password?')}
              </NavLink>
            </div>
            <br style={{ both: 'clear' }} />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ ...state.user }),
  { login, getCustomer }
)(translate('translations')(withRouter(withStyles(styles)(LoginComponent))));
