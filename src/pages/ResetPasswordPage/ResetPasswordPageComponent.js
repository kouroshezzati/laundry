import React, { Component } from 'react';
import ResetPasswordComponent from '../../components/User/ResetPassword/ResetPasswordComponent';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';
import './style.css';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';

export class ResetPasswordPageComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="vh-100 d-flex align-content-center flex-wrap fancy-bg">
          <NavbarComponent />
          <div className="login-form-wrapper mx-auto p-2">
            <ResetPasswordComponent />
          </div>
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ResetPasswordPageComponent;
