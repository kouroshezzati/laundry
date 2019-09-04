import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Button } from '@material-ui/core';
import './style.css';
import galoo from '../ServicesComponent/img/galoo.jpg';
import { NavLink } from 'react-router-dom';

export class BusinessComponent extends Component {
  render() {
    const { t } = this.props;
    return (
      <section id="business">
        <img alt="laundry" src={galoo} />
        <div className="container">
          <div className="row">
            <div className="mb-3 col-12">
              <h2 className="text-center">{t('BUSINESSES')}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
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
