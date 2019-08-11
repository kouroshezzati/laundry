import React, { Component } from 'react';
import ContactComponent, {
  ContactInfo
} from '../../components/ContactUsComponent/ContactUsComponent';
import './style.css';
import { translate } from 'react-i18next';
import Page from '../index';

export class index extends Component {
  render() {
    const { t } = this.props;
    return (
      <Page>
        <div className="main-section align-content-center fancy-bg">
          <div className="contact-form-wrapper form-wrapper m-2 mx-auto p-2">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-us-log">
                  {/* <div className="map-wrapper">
                    <MyMapComponent isMarkerShown />
                  </div> */}
                  <h3 className="text-center mt-4 mb-3">
                    {t('Please contact us.')}
                  </h3>
                  <div>
                    <ContactInfo displayIcons {...this.props} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <ContactComponent />
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default translate('translations')(index);
