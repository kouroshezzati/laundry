import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Button } from '@material-ui/core';
import './style.css';
import galoo from '../ServicesComponent/img/galoo.jpg';
import {NavLink} from 'react-router-dom';

export class BusinessComponent extends Component {
  render() {
    const { t } = this.props;
    return (
      <section id="business">
        <div className="container">
          <div className="row">
            <div className="col-md-6 business-img-wrapper">
              <img alt="laundry" src={galoo} />
            </div>
            <div className="col-md-6">
              <div className="business-message">
                <h2>{t('BUSINESSES')}</h2>
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
