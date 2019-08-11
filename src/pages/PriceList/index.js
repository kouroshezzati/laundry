import React, { Component } from 'react';
import PriceListComponent from "../../components/PriceList/PriceListContainer";
import './style.css';
import Page from '../index';

export class index extends Component {
  render() {
    return (
      <Page>
        <div className="main-section align-content-center fancy-bg">
          <div className="pricelist-wrapper m-2 form-wrapper mx-auto p-2">
            <PriceListComponent />
          </div>
        </div>
      </Page>
    );
  }
}

export default index;
