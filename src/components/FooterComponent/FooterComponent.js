import React from 'react';
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

export const FooterComponent = props => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <FontAwesomeIcon icon={faCcPaypal} className="m-1" size="2x" />
            <FontAwesomeIcon icon={faCcMastercard} className="m-1" size="2x" />
            <FontAwesomeIcon icon={faCcVisa} className="m-1" size="2x" />
            <FontAwesomeIcon icon={faCcAmazonPay} className="m-1" size="2x" />
          </div>
          <div className="col-md-4">
            Address:Platina weg 25 2544 EZ S-Gravenhage
          </div>
          <div className="col-md-4">
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
      </div>
      <div className="container copy-right">
        <p>&copy; 2019.</p>
      </div>
    </footer>
  );
};
