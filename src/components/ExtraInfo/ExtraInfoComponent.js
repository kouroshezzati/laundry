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
                {t(`Monday to Saturday 9am to 18.00
                    we also offer after opening hours urgent delivery, please contact us.
                    `)}
              </p>
            </div>
            <div className="col-md-4">
              <h3>{t('Offers & subscription')}</h3>
              <hr />
              <p className="text-center">
                {t(`10 % Discount for our first time users
                  Gold Member
                  Pearl Member
                  `)}
              </p>
            </div>
            <div className="col-md-4">
              <h3>{t('Delivery Charges')}</h3>
              <hr />
              <p className="text-center">
                {t(`Free Delivery Above 22.oo Euro`)}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default translate('translations')(ExtraInfoComponent);
