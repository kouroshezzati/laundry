import React, { Component } from 'react';
import RegisterComponent from '../../components/User/RegisterComponent/RegisterComponent';
import './style.css';
import Page from '../index';

export class index extends Component {
  render() {
    return (
      <Page>
        <div className="main-section d-flex align-content-center flex-wrap fancy-bg">
          <div className="register-wrapper mx-auto p-2">
            <RegisterComponent />
          </div>
        </div>
      </Page>
    );
  }
}

export default index;
