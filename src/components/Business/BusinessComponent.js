import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Button } from '@material-ui/core';
import './style.css';
import { NavLink } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import galoo from '../ServicesComponent/img/galoo.jpg';
import coat from './img/coat.jpg';
import fabrics from './img/fabrics.jpg';
import rags from './img/rags.jpg';
import towels from './img/towels.jpg';
const slideImages = [galoo, coat, fabrics, rags, towels];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};
export class BusinessComponent extends Component {
  render() {
    const { t } = this.props;
    return (
      <section id="business">
        <div className="container">
          <div className="row">
            <div className="mb-3 col-12">
              <h2 className="text-center">{t('BUSINESSES')}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="slide-container">
                <Slide {...properties}>
                  {slideImages.map(slide => (
                    <div className="each-slide">
                      <div
                        style={{
                          backgroundImage: `url(${slide})`,
                          height: '300px',
                          backgroundSize: 'cover'
                        }}
                      />
                    </div>
                  ))}
                </Slide>
              </div>
            </div>
            <div className="col-6">
              <div className="business-message">
                <p>{t('business.description')}</p>
                <h5>{t('business.description.tip')}</h5>
              </div>
              <NavLink to="/contact/">
                <Button variant="contained" color="primary" fullWidth>
                  {t('BUSINESS ORDER')}
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default translate('translations')(BusinessComponent);
