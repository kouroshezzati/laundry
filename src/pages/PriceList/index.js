import React, { Component } from 'react';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import PriceListComponent from "../../components/PriceList/PriceListContainer";
import './style.css';

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex align-content-center flex-wrap fancy-bg">
          <NavbarComponent />
          <div className="pricelist-wrapper form-wrapper mx-auto p-2">
            <PriceListComponent />
          </div>
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default index;
