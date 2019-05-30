import React, { Component } from 'react';
import LoginComponent from '../../components/User/LoginComponent/LoginComponent';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';
import './style.css';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="vh-100 d-flex align-content-center flex-wrap fancy-bg">
          <NavbarComponent />
          <div className="login-form-wrapper mx-auto p-2">
            <LoginComponent />
          </div>
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default index;
