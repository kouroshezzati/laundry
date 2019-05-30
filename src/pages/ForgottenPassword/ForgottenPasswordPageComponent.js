import React, { Component } from 'react';
import ForgetPasswordComponent from '../../components/User/ForgetPassword/ForgetPasswordComponent';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';
import './style.css';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="vh-100 d-flex align-content-center flex-wrap fancy-bg">
          <NavbarComponent />
          <div className="forget-password-form-wrapper form-wrapper mx-auto p-2">
            <ForgetPasswordComponent />
          </div>
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default index;
