import React, { Component } from 'react';
import ContactComponent, {
  ContactInfo
} from '../../components/ContactUsComponent/ContactUsComponent';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import './style.css';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import { translate } from 'react-i18next';
import logo from '../../assets/images/logo_65.png';

export class index extends Component {
  render() {
    // const { t } = this.props;
    return (
      <React.Fragment>
        <div className="vh-100 d-flex align-content-center flex-wrap fancy-bg">
          <NavbarComponent />
          <div className="contact-form-wrapper form-wrapper mx-auto p-2">
            <div className="row">
              <div className="col-md-6">
                <div className="text-center contact-us-log">
                  <img alt="laundry" src={logo} />
                </div>
                <ContactInfo contactUs {...this.props} />
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
