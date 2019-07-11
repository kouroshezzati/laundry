import React, { Component } from 'react';
import ContactComponent, {
  ContactInfo
} from '../../components/ContactUsComponent/ContactUsComponent';
import './style.css';
import { translate } from 'react-i18next';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import Page from '../index';

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDoPYVlg5Vd2z_-AIaBNC0UcB-OoKXE1Fo',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    style={{ height: '100%' }}
    defaultZoom={8}
    defaultCenter={{ lat: 52.052048, lng: 4.254743 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 52.052048, lng: 4.254743 }} />
    )}
  </GoogleMap>
));

export class index extends Component {
  render() {
    const { t } = this.props;
    return (
      <Page>
        <div className="main-section align-content-center flex-wrap fancy-bg">
          <div className="contact-form-wrapper form-wrapper m-2 mx-auto p-2">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-us-log">
                  {/* <div className="map-wrapper">
                    <MyMapComponent isMarkerShown />
                  </div> */}
                  <h3 className="text-center mt-4 mb-3">{t('Please contact us.')}</h3>
                  <div>
                    <ContactInfo {...this.props} />
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
