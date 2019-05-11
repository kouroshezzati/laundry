import React from 'react';
import './style.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import laundryService from './img/laundry-service.jpg';
import slideImg4 from './img/slide-img4.png';
import images from './img/images.jpg';
import dovomi from './img/dovomi.jpg';
import house from './img/house.jpg';
import carpet from './img/carpet.jpg';

library.add(faTshirt);
export const ServicesComponent = props => {
  return (
    <section className="services text-center" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-4 service">
            <img src={laundryService} className="test" />
            <p className="service-text">Lundry wash & Fold</p>
          </div>
          <div className="col-md-4 service">
            <img src={slideImg4} className="test" />
            <p className="service-text">Dry Clean</p>
          </div>
          <div className="col-md-4 service">
            <img src={images} className="test" />
            <p className="service-text">Press</p>
          </div>
          <div className="col-md-4 service">
            <img src={dovomi} className="test" />
            <p className="service-text">Bedroom</p>
          </div>
          <div className="col-md-4 service">
            <img src={house} className="test" />
            <p className="service-text">House Hold</p>
          </div>
          <div className="col-md-4 service">
            <img src={carpet} className="test" />
            <p className="service-text">Carpets</p>
          </div>
        </div>
      </div>
    </section>
  );
};
