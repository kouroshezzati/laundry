import React, { Component } from 'react'
import {translate} from 'react-i18next';
import './styles.css';
import legecy from '../ServicesComponent/img/legecy.jpg';
import basket2 from '../ServicesComponent/img/basket2.jpg';
import washi from '../ServicesComponent/img/washi.jpg';
import step4 from '../ServicesComponent/img/step4.jpg';
export class StepComponent extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="steps">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 step">
              <img alt="laundry" src={basket2} />
                <p className="step-title">{('STEP 1')}</p>
            </div>
            <div className="col-md-3 col-sm-6 step">
              <img alt="laundry" src={legecy} />
              <p className="step-title">STEP 2</p>
            </div>
            <div className="col-md-3 col-sm-6 step">
              <img alt="laundry" src={washi} />
               <p className="step-title">STEP 3</p>
            </div>
            <div className="col-md-3 col-sm-6 step">
              <img alt="laundry" src={step4} />
              <p className="step-title">STEP 4</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default translate('translations')(StepComponent);
