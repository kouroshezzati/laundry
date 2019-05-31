import React, { Component } from 'react'
import './styles.css';
import images from '../ServicesComponent/img/images.jpg';
import dovomi from '../ServicesComponent/img/dovomi.jpg';
import house from '../ServicesComponent/img/house.jpg';
import carpet from '../ServicesComponent/img/carpet.jpg';

export class StepComponent extends Component {
  render() {
    return (
      <section id="steps">
        <div className="container">
          <div className="row">
            <div className="col-md-3 step">
              <img alt="laundry" src={images} />
            </div>
            <div className="col-md-3 step">
              <img alt="laundry" src={dovomi} />
            </div>
            <div className="col-md-3 step">
              <img alt="laundry" src={house} />
            </div>
            <div className="col-md-3 step">
              <img alt="laundry" src={carpet} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StepComponent
