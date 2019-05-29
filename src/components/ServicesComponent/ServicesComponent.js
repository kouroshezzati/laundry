import React from 'react';
import './style.css';

import laundryService from './img/laundry-service.jpg';
import slideImg4 from './img/slide-img4.png';
import images from './img/images.jpg';
import dovomi from './img/dovomi.jpg';
import house from './img/house.jpg';
import carpet from './img/carpet.jpg';

export const ServicesComponent = props => {
  return (
    <section className="services text-center" id="services">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 service">
            <img alt="laundry online" src={dovomi} className="service-image" />
            <p className="service-text">Lundry wash & Fold</p>
          </div>
          <div className="col-sm-6 col-md-4 service">
            <img alt="laundry online" src={slideImg4} className="service-image" />
            <p className="service-text">Dry Clean</p>
          </div>
          <div className="col-sm-6 col-md-4 service">
            <img alt="laundry online" src={images} className="service-image" />
            <p className="service-text">Press</p>
          </div>
          <div className="col-sm-6 col-md-4 service">
            <img alt="laundry online" src={dovomi} className="service-image" />
            <p className="service-text">Bedroom</p>
          </div>
          <div className="col-sm-6 col-md-4 service">
            <img alt="laundry online" src={house} className="service-image" />
            <p className="service-text">House Hold</p>
          </div>
          <div className="col-sm-6 col-md-4 service">
            <img alt="laundry online" src={carpet} className="service-image" />
            <p className="service-text">Carpets</p>
          </div>
        </div>
      </div>
    </section>
  );
};
