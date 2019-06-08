import React, { Component } from 'react';
import LoginComponent from '../../components/User/LoginComponent/LoginComponent';
import './style.css';
import Page from '../index';

export class index extends Component {
  render() {
    return (
      <Page>
        <div className="vh-100 d-flex align-content-center flex-wrap fancy-bg">
          <div className="login-form-wrapper mx-auto p-2">
            <LoginComponent />
          </div>
        </div>
      </Page>
    );
  }
}

export default index;
