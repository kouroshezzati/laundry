import React, { Component } from 'react';
import RegisterComponent from '../../components/User/RegisterComponent/RegisterComponent';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import './style.css';
import NavBarComponent from '../../components/NavbarComponent/NavbarComponent';

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="vh-100 d-flex align-content-center flex-wrap fancy-bg">
          <NavBarComponent />
          <div className="register-wrapper mx-auto p-2">
            <RegisterComponent />
          </div>
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default index;
