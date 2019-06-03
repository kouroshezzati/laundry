import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Button } from '@material-ui/core';
import './style.css';
import dovomi from '../ServicesComponent/img/dovomi.jpg';

export class BusinessComponent extends Component {
  render() {
    const { t } = this.props;
    return (
      <section id="business">
        <div className="container">
          <div className="row">
            <div className="col-md-6 business-img-wrapper">
              <img alt="laundry" src={dovomi} />
            </div>
            <div className="col-md-6">
              <p className="business-message">
                {t('business.description')}
              </p>
              <Button variant="contained" color="secondary">
                {t('Special order')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default translate('translations')(BusinessComponent);
