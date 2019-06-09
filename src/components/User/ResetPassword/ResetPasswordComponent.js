import React, { Component } from 'react';
import classnames from 'classnames'
import { withRouter } from 'react-router-dom';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import './style.css';
import { connect } from 'react-redux';
import { resetPassword } from '../UserActions';
import { RESET_PASSWORD_FAILURE } from '../UserConstants';
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

class ForgetPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.password = React.createRef();
    this.confirm_password = React.createRef();
    this.state = { message: '', isSubmitted: false };
  }
  onSubmit = event => {
    event.preventDefault();
    this.setState({isSubmitted: true});
    const params = new URLSearchParams(this.props.location.search);
    const code = params.get('code');
    const password = this.password.current.value;
    const passwordConfirmation = this.confirm_password.current.value;
    if(!code){
    this.setState({message: 'There is no private code!'});
    return;
  }
    if(!password || !passwordConfirmation || password !== passwordConfirmation){
      this.setState({ message: 'Enter a password!' });
      return;
    }
    const _data = {
      code,
      password,
      passwordConfirmation
    };
    if (!_data.code || !_data.password || !_data.passwordConfirmation) {
      return;
    }
    this.props.resetPassword(_data).then(data => {
      if (data.type === RESET_PASSWORD_FAILURE) {
        this.setState({ message: data.message });
      } else {
        this.setState({
          message: "Your user's password has been changed."
        });
      }
    });
  };
  checkPasswords = () => {
    return (
      this.state.isSubmitted &&
      this.password.current.value !== this.confirm_password.current.value
    );
  }
  render() {
    const { classes, t } = this.props;
    const { message } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit} id="form2">
          <div className="form-group">
            <input
              required
              className={classnames(
                'form-control',
                this.checkPasswords() ? 'is-invalid' : ''
              )}
              ref={this.password}
              placeholder="New password"
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
              placeholder="Confirm the password"
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
            <MuiThemeProvider theme={theme}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                className={classes.margin}
              >
                {t('Change password')}
              </Button>
            </MuiThemeProvider>
          </div>
          <div className="text-center">
            <small style={{ color: 'red' }}>{message}</small>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ ...state.user }),
  { resetPassword }
)(
  translate('translations')(
    withRouter(withStyles(styles)(ForgetPasswordComponent))
  )
);
