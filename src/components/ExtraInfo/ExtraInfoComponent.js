import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Button } from '@material-ui/core';
import './style.css';
import specialoffer from '../ServicesComponent/img/special-offer.gif';

export class extrainfo  extends Component {
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
              <Button variant="contained" color="primary" fullWidth>
                {t('SPECIAL ORDER')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default translate('translations')(extrainfo);
