import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import LoginComponent from '../../components/User/LoginComponent/LoginComponent';
import './style.css';
import Page from '../index';

export class index extends Component {
  render() {
    const { t } = this.props;
    return (
      <Page>
        <div className="main-section d-flex align-content-center fancy-bg">
          <div className="login-form-wrapper mx-auto p-2">
            <LoginComponent />
            <div className="text-center">
              <Link to="/register/">{t('register')}</Link>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default translate('translations')(index);
