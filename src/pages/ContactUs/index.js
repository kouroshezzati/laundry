import React, { Component } from 'react';
import ContactComponent from '../../components/ContactUsComponent/ContactUsComponent';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';
import './style.css';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import { translate } from 'react-i18next';

export class index extends Component {
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <div className="vh-100 d-flex align-content-center flex-wrap fancy-bg">
          <NavbarComponent />
          <div className="contact-form-wrapper form-wrapper mx-auto p-2">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-information">
                  <div className="contact-record">
                    <span className="key">{t('Address')}:</span>
                    <span className="value">
                      Platina weg 25 2544 EZ S-Gravenhage
                    </span>
                  </div>
                  <div className="contact-record">
                    <span className="key">{t('Kvk nummer')}:</span>
                    <span className="value">74639757</span>
                  </div>
                  <div className="contact-record">
                    <span className="key">{t('TEL')}:</span>
                    <span className="value">+31 626 142 889</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <ContactComponent />
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default translate('translations')(index);
