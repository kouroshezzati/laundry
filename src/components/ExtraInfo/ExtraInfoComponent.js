import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './style.css';

export class ExtraInfoComponent extends Component {
  render() {
    const { t } = this.props;
    return (
      <section className="extra-info" id="extra-info">
        <div className="container text-center">
          <div className="row section-heading">
            <div className="col-md-12">
            </div>
            <div className="col-md-4">
              <h3>{t('Pick up & Drop Time')}</h3>
              <hr />
              <p className="text-center">
                {t(`pickup.description`)}
              </p>
            </div>
            <div className="col-md-4">
              <h3>{t('Offers & subscription')}</h3>
              <hr />
              <p className="text-center">
                {t(`offers.description`)}
              </p>
            </div>
            <div className="col-md-4">
              <h3>{t('Delivery Charges')}</h3>
              <hr />
              <p className="text-center">
                {t(`delivery.description`)}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default translate('translations')(ExtraInfoComponent);
