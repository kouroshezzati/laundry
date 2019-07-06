import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Button } from '@material-ui/core';
import './style.css';
import specialoffer from '../ServicesComponent/img/special-offer.gif';
import { NavLink } from 'react-router-dom';
export class extrainfo extends Component {
  render() {
    const { t } = this.props;
    return (
      <section id="special-order">
        <div className="container">
          <div className="row">
            <div className="col-md-6 special-offer-img-wrapper">
              <img alt="laundry" src={specialoffer} />
            </div>
            <div className="col-md-6">
              <div className="special-offer-message">
                <h2>{t('SPECIAL OFFER')}</h2>
              </div>
              <NavLink to="/date?type=especial_offer">
                <Button variant="contained" color="primary" fullWidth>
                  {t('SPECIAL ORDER')}
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default translate('translations')(extrainfo);
