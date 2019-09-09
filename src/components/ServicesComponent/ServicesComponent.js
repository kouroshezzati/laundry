import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { translate } from 'react-i18next';
import images from './img/images.jpg';
import dovomi from './img/dovomi.jpg';
import house from './img/house.jpg';
import carpet from './img/carpet.jpg';
import suit from './img/suit.jpg';
import bed from './img/bed.jpg';
import { Button } from '@material-ui/core';
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
              <p className="service-text">
                {t('LAUNDRY')}
                <br></br>
                {t('WASH & FOLD')}
              </p>
            </div>
            <div className="col-sm-6 col-md-4 service">
              <img alt="laundry online" src={suit} className="service-image" />
              <p className="service-text">{t('DRY CLEAN')}</p>
            </div>
            <div className="col-sm-6 col-md-4 service">
              <img
                alt="laundry online"
                src={images}
                className="service-image"
              />
              <p className="service-text">{t('PRESS')}</p>
            </div>
            <div className="col-sm-6 col-md-4 service">
              <img alt="bed" src={bed} className="service-image" />
              <p className="service-text">
                {t('BEDROOM')}
                <br></br>
                {t('TEXTILES')}
              </p>
            </div>
            <div className="col-sm-6 col-md-4 service">
              <img alt="laundry online" src={house} className="service-image" />
              <p className="service-text">
                {t('HOUSE HOLD')}
                <br></br>
                {t('TEXTILES')}
              </p>
            </div>
            <div className="col-sm-6 col-md-4 service">
              <img
                alt="laundry online"
                src={carpet}
                className="service-image"
              />
              <p className="service-text">
                <div>{t('CARPET CLEANING')}</div>
                <NavLink to="/contact/">
                  <Button color="secondary" variant="contained">
                    {t('conatct us')}
                  </Button>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default translate('translations')(ServicesComponent);
