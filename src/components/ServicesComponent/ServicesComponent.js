import React from 'react';
import './style.css';
import { translate } from 'react-i18next';
import slideImg4 from './img/slide-img4.png';
import images from './img/images.jpg';
import dovomi from './img/dovomi.jpg';
import house from './img/house.jpg';
import carpet from './img/carpet.jpg';

class ServicesComponent extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <section className="services text-center" id="services">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 service">
              <img
                alt="laundry online"
                src={dovomi}
                className="service-image"
              />
              <p className="service-text">{t('Lundry wash & Fold')}</p>
            </div>
            <div className="col-sm-6 col-md-4 service">
              <img
                alt="laundry online"
                src={slideImg4}
                className="service-image"
              />
              <p className="service-text">{t('Dry Clean')}</p>
            </div>
            <div className="col-sm-6 col-md-4 service">
              <img
                alt="laundry online"
                src={images}
                className="service-image"
              />
              <p className="service-text">{t('Press')}</p>
            </div>
            <div className="col-sm-6 col-md-4 service">
              <img
                alt="laundry online"
                src={dovomi}
                className="service-image"
              />
              <p className="service-text">{t('Bedroom')}</p>
            </div>
            <div className="col-sm-6 col-md-4 service">
              <img alt="laundry online" src={house} className="service-image" />
              <p className="service-text">{t('House Hold')}</p>
            </div>
            <div className="col-sm-6 col-md-4 service">
              <img
                alt="laundry online"
                src={carpet}
                className="service-image"
              />
              <p className="service-text">{t('Carpets')}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default translate('translations')(ServicesComponent);
