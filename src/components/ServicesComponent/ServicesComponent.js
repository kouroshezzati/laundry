import React from 'react';
import './style.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import laundryService from './img/laundry-service.jpg';
library.add(faTshirt);

export const ServicesComponent = props => {
  return (
    <section className="services text-center" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-4 service">
            <img
              src={laundryService}
              alt="Lundry wash & Fold"
              className="test"
            />
            <p className="service-text">Lundry wash & Fold</p>
          </div>
          <div className="col-md-4 service">
            <FontAwesomeIcon className="service-icon" icon="tshirt" />
            <p className="service-text">Dry Clean</p>
          </div>
          <div className="col-md-4 service">
            <FontAwesomeIcon className="service-icon" icon="tshirt" />
            <p className="service-text">Press</p>
          </div>
          <div className="col-md-4 service">
            <FontAwesomeIcon className="service-icon" icon="tshirt" />
            <p className="service-text">Bedroom</p>
          </div>
          <div className="col-md-4 service">
            <FontAwesomeIcon className="service-icon" icon="tshirt" />
            <p className="service-text">House Hold</p>
          </div>
          <div className="col-md-4 service">
            <FontAwesomeIcon className="service-icon" icon="tshirt" />
            <p className="service-text">Carpets</p>
          </div>
        </div>
      </div>
    </section>
  );
};
