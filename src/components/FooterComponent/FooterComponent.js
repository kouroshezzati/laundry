import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { translate } from 'react-i18next';
import { ContactInfo } from '../ContactUsComponent/ContactUsComponent';
import masterCardImg from './img/mastercard.png';
import idealImg from './img/ideal.png';
import paypalImg from './img/PayPal.jpg';
import visaImg from './img/visa.png';
import logo from '../../assets/images/logo_65.png';

let FooterComponent = props => {
  const { t } = props;
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 icons-footer bank-icons">
            <div style={{ width: '300px', marginTop: '23px' }}>
              <p>{t('Monday to Saturday 9am to 18.00')}</p>
              <p className="mt-1">
                {t(
                  'We also offer after opening hours urgent delivery, please contact us.'
                )}
              </p>
            </div>
            <div style={{ position: 'absolute', bottom: '10px' }}>
              <p
                className="mt-1"
                style={{ fontSize: '1.1em', fontWeight: '500' }}
              >
                {t('Payment methods')}
              </p>
              <img alt="laundry" src={masterCardImg} />
              <img alt="laundry" src={idealImg} />
              <img alt="laundry" src={paypalImg} />
              <img alt="laundry" src={visaImg} />
            </div>
          </div>
          <div className="col-md-4">
            <img
              style={{ height: '120px' }}
              alt="bubblesonlie laundry"
              src={logo}
            />
            <ContactInfo {...props} />
          </div>
          <div className="col-md-4">
            <h5 className="mt-2 mb-1">{t('Areas')}</h5>
            <div>Den haag</div>
            <div>leidschendam / voorburg</div>
            <div>wassenaar</div>
            <div>voorschoten</div>
            <div>wateringen</div>
            <div>nootdorp</div>
            <div>leiden</div>
            <div>zoetermeer</div>
            <div>leiden</div>
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
            <div className="col-sm-4">
              <NavLink className="footer-link" to="/contact/">
                {t('contact')}
              </NavLink>
            </div>
            <div className="col-md-4 icons-footer">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="m-1"
                size="2x"
              />
              <FontAwesomeIcon icon={faTwitter} className="m-1" size="2x" />
            </div>
            <div className="col-sm-4">
              <NavLink className="footer-link" to="/terms-and-conditions/">
                {t('privacy policy')}
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="container copy-right">
        <p>bubblesonlie &copy; 2019.</p>
      </div>
    </footer>
  );
};

export default translate('translations')(FooterComponent);
