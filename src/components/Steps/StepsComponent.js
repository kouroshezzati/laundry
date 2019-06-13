import React, { Component } from 'react'
import './styles.css';
import legecy from '../ServicesComponent/img/legecy.jpg';
import basket2 from '../ServicesComponent/img/basket2.jpg';
import washi from '../ServicesComponent/img/washi.jpg';
import step4 from '../ServicesComponent/img/step4.jpg';
export class StepComponent extends Component {
  render() {
    return (
      <section id="steps">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 step">
              <img alt="laundry" src={basket2} />
            </div>
            <div className="col-md-3 col-sm-6 step">
              <img alt="laundry" src={legecy} />
            </div>
            <div className="col-md-3 col-sm-6 step">
              <img alt="laundry" src={washi} />
            </div>
            <div className="col-md-3 col-sm-6 step">
              <img alt="laundry" src={step4} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StepComponent
