import React, { Component } from 'react'
import './styles.css';
import images from '../ServicesComponent/img/images.jpg';
import dovomi from '../ServicesComponent/img/dovomi.jpg';
import house from '../ServicesComponent/img/house.jpg';
import carpet from '../ServicesComponent/img/carpet.jpg';
import basket from '../ServicesComponent/img/basket.jpg';
import wash from '../ServicesComponent/img/wash.png';
import deliver from '../ServicesComponent/img/deliver.png';
export class StepComponent extends Component {
  render() {
    return (
      <section id="steps">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 step">
              <img alt="laundry" src={basket} />
            </div>
            <div className="col-md-3 col-sm-6 step">
              <img alt="laundry" src={dovomi} />
            </div>
            <div className="col-md-3 col-sm-6 step">
              <img alt="laundry" src={wash} />
            </div>
            <div className="col-md-3 col-sm-6 step">
              <img alt="laundry" src={deliver} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StepComponent
