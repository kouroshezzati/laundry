import React, { Component } from 'react';
import ResetPasswordComponent from '../../components/User/ResetPassword/ResetPasswordComponent';
import './style.css';
import Page from '../index';

export class ResetPasswordPageComponent extends Component {
  render() {
    return (
      <Page>
        <div className="vh-100 d-flex align-content-center flex-wrap fancy-bg">
          <div className="login-form-wrapper mx-auto p-2">
            <ResetPasswordComponent />
          </div>
        </div>
      </Page>
    );
  }
}

export default ResetPasswordPageComponent;
