import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCcPaypal,
  faCcMastercard,
  faCcVisa,
  faCcAmazonPay,
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { translate } from 'react-i18next';
import { ContactInfo } from '../ContactUsComponent/ContactUsComponent';

let FooterComponent = props => {
  // const { t } = props;
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 icons-footer bank-icons">
            <FontAwesomeIcon icon={faCcPaypal} className="m-1" size="2x" />
            <FontAwesomeIcon
              icon={faCcMastercard}
              className="m-1"
              size="2x"
            />
            <FontAwesomeIcon icon={faCcVisa} className="m-1" size="2x" />
            <FontAwesomeIcon icon={faCcAmazonPay} className="m-1" size="2x" />
          </div>
          <div className="col-md-4">
            <ContactInfo {...props} />
          </div>
          <div className="col-md-4 icons-footer social-icons">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="m-1"
              size="2x"
            />
            <FontAwesomeIcon icon={faInstagram} className="m-1" size="2x" />
            <FontAwesomeIcon icon={faTwitter} className="m-1" size="2x" />
            <FontAwesomeIcon icon={faWhatsapp} className="m-1" size="2x" />
          </div>
        </div>
        <div className="links container">
          <div
            className="row"
            style={{
              margin: '10px 0',
              paddingTop: '5px',
              borderTop: '1px solid white'
            }}
          >
            <div className="col-sm-6">
              <NavLink className="footer-link" to="/contact/">
                contact
              </NavLink>
            </div>
            <div className="col-sm-6">
              <NavLink className="footer-link" to="/terms-and-conditions/">
                terms and condtions
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="container copy-right">
        <p>&copy; 2019.</p>
      </div>
    </footer>
  );
};

export default translate('translations')(FooterComponent);
