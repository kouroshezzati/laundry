import React from 'react';
import './style.css';
import { translate } from 'react-i18next';

let AboutUsComponent = props => {
  const { t } = props;
  return (
    <section className="about-us" id="about-us">
      <div className="container">
        <div className="section-heading text-center">
          <h2>{t('About us')}</h2>
          <hr />
          <p className="description">{t('aboutus.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default translate('translations')(AboutUsComponent);
