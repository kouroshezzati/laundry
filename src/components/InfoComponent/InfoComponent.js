import React from 'react';
import './style.css';
import { translate } from 'react-i18next';
import bug1 from '../ServicesComponent/img/bug1.jpg';
import bug3 from '../ServicesComponent/img/bug3.jpg';

let InfoComponent = props => {
  const { t } = props;
  return (
    <section className="info" id="info">
      <div className="container">
        <div className="section-heading text-center">
          <h2>{t('DID YOU KNOW')}</h2>
          <hr />
          <p>{t('info.description')}</p>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <img alt="bug1" className="bug1" src={bug1} />
          </div>
          <div className="col-md-6 ">
            <img alt="bug3" className="bug3" src={bug3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default translate('translations')(InfoComponent);
