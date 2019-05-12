import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import './style.css';
import { connect } from 'react-redux';
import { sendResetPasswordCode } from '../UserActions';
import { FORGOTTEN_FAILURE } from '../UserConstants';
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
    this.email = React.createRef();
    this.state = {forgottenPasswordMessage : ''};
  }
  onSubmit = event => {
    event.preventDefault();
    const _data = {
      email: this.email.current.value
    };
    if (!_data.email) {
      return;
    }
    this.props.sendResetPasswordCode(_data.email)
    .then(data => {
      if(data.type === FORGOTTEN_FAILURE){
        this.setState({forgottenPasswordMessage: data.message})
      }else{
        this.setState({
          forgottenPasswordMessage: 'Check your email. please!'
        });
      }

    })
  };
  render() {
    const { classes, t } = this.props;
    const {forgottenPasswordMessage} = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit} id="form2">
          <div className="form-group">
            <input
              type="email"
              required
              ref={this.email}
              className="form-control"
              placeholder="Email"
            />
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
                {t('Send email')}
              </Button>
            </MuiThemeProvider>
          </div>
          <div class="text-center"><small style={{ color: 'red' }}>{forgottenPasswordMessage}</small></div>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({...state.user}),
  { sendResetPasswordCode }
)(translate('translations')(withRouter(withStyles(styles)(ForgetPasswordComponent))));
