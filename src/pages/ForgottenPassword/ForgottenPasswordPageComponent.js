import React, { Component } from 'react';
import ForgetPasswordComponent from '../../components/User/ForgetPassword/ForgetPasswordComponent';
import './style.css';
import Page from '../index';

export class index extends Component {
  render() {
    return (
      <Page>
        <div className="main-section d-flex align-content-center fancy-bg">
          <div className="forget-password-form-wrapper form-wrapper mx-auto p-2">
            <ForgetPasswordComponent />
          </div>
        </div>
      </Page>
    );
  }
}

export default index;
