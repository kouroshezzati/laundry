import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import { API_ROOT } from '../../constants/index.js';
import './style.css';
import Snackbar from '../../utils/Snackbar/SnackbarComponent';
import { translate } from 'react-i18next';
import twitter from '../FooterComponent/img/twitter.png';
import facebook from '../FooterComponent/img/facebook.png';
import ReCAPTCHA from 'react-google-recaptcha';

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

export class ContactUsComponent extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.name = React.createRef();
    this.subject = React.createRef();
    this.body = React.createRef();
    this.state = { snackBar: false };
    this.recaptchaRef = React.createRef();
  }
  
  onSubmit = event => {
    event.preventDefault();
    const _data = {
      name: this.name.current.value,
      email: this.email.current.value,
      subject: this.subject.current.value,
      body: this.body.current.value,
      'g-recaptcha-response': this.recaptchaRef.current.getValue()
    };
    if (!_data.email || !_data.name || !_data.subject || !_data.body) {
      return;
    }
    axios
      .post(`${API_ROOT}/contactus/`, { ..._data })
      .then(data => {
        this.name.current.value = '';
        this.email.current.value = '';
        this.subject.current.value = '';
        this.body.current.value = '';
        this.setState({ snackBar: true });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { classes, t } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit} id="form2">
          <div className="form-group">
            <input
              ref={this.name}
              type="text"
              required
              placeholder={t('Name')}
              className={classnames('form-control')}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              required
              ref={this.email}
              className={classnames('form-control')}
              placeholder={t('Email')}
            />
            <small id="emailHelp" className="form-text text-muted">
              {t('email.privacy')}
            </small>
          </div>
          <div className="form-group">
            <input
              required
              className={classnames('form-control')}
              type="text"
              ref={this.subject}
              placeholder={t('Subject')}
            />
          </div>
          <div className="form-group">
            <textarea
              className={classnames('form-control')}
              required
              ref={this.body}
              placeholder={t('Message')}
            />
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
            <NavLink className="float-right p-1" to="/">
              {t('Back')}
            </NavLink>
          </div>
          <ReCAPTCHA
            ref={this.recaptchaRef}
            sitekey="6LePa68UAAAAAFr7NQQ0PK_6osoAuxW_a8o8Gvvz"
          />
        </form>
        <Snackbar
          onHandlerClose={e => this.setState({ snackBar: false })}
          snackbarMessage="Your message has been sent"
          isSnackbarOpen={this.state.snackBar}
        />
      </React.Fragment>
    );
  }
}

export const ContactInfo = props => {
  const { t, displayIcons } = props;
  return (
    <div className="tact-information">
      <div className="contact-record">
        <span className="key">{t('Address')}:</span>
        <span className="value">Platina weg 25 </span>
        <br />
        <span className="value">2544 EZ - S-Gravenhage</span>
      </div>
      <div className="contact-record">
        <span className="key">{t('Kvk nummer')}:</span>
        <span className="value">74639757</span>
      </div>
      <div className="contact-record">
        <span className="key">{t('BTW Nummer')}:</span>
        <span className="value">NL 072877054B02</span>
      </div>
      <div className="contact-record">
        <span className="key">{t('Email')}:</span>
        <span className="value">info@bubblesonline.nl</span>
      </div>
      <div className="contact-record">
        <span className="key">{t('TEL')}:</span>
        <span className="value">
          <a href="Tel:+31 626 142 889">+31 626 142 889</a>
        </span>
      </div>
      {displayIcons && (
        <div className="contact-record">
          <img src={facebook} alt="laundry dry and clean" />
          <img src={twitter} alt="laundry dry and clean" />
        </div>
      )}
    </div>
  );
};

export default translate('translations')(
  withStyles(styles)(ContactUsComponent)
);
