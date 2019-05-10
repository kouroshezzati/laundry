import React, { Component } from 'react';
import { FooterComponent } from 'components/FooterComponent/FooterComponent';
import './style.css';
import NavbarComponent from 'components/NavbarComponent/NavbarComponent';

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="vh-100 d-flex align-content-center flex-wrap fancy-bg">
          <NavbarComponent />
          <div className="contact-form-wrapper mx-auto p-2" />
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default index;
