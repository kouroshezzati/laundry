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
              <h3>{t('Did you know')}</h3>
              <hr />
              <p className="main-text">
                {t(`Bed bugs are not something that we think of every day ,
                    but the fact is that they can be in our bed covers, pillow 
                    quilts , sofa covers & in our clothing , it can give you skin rash
                    small red bumps , surrounded by blisters or hives;
                      one of the ways that you can get rid of them 
                    we recommend to have your bed covers, Sofa covers washed
                    by porfesional  since the correct tempruter and correct wash detergent
                    is essential to get the best results.
                    our recomendation is 2 times a year wash for, pillow, comforter ,
                    over mattress and sofa covers

                    `)}
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>{t('Pick up & Drop Time')}</h5>
              <hr />
              <p className="text-center">
                {t(`Monday to Saturday 9am to 18.00
                    we also offer after opening hours urgent delivery, please contact us.
                    `)}
              </p>
            </div>
            <div className="col-md-4">
              <h5>{t('Offers & subscription')}</h5>
              <hr />
              <p className="text-center">
                {t(`10 % Discount for our first time users
                  Gold Member
                  Pearl Member
                  `)}
              </p>
            </div>
            <div className="col-md-4">
              <h5>{t('Delivery Charges')}</h5>
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
