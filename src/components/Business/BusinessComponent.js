import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Button } from '@material-ui/core';
import './style.css';
import dovomi from '../ServicesComponent/img/dovomi.jpg';

export class BusinessComponent extends Component {
  render() {
    const { t } = this.props;
    return (
      <section id="business">
        <div className="container">
          <div className="row">
            <div className="col-md-6 business-img-wrapper">
              <img alt="laundry" src={dovomi} />
            </div>
            <div className="col-md-6">
              <p className="business-message">
                <h2>{t('Bedrijven')}</h2>
                BUBBLES  is gespecialiseerd in het reinigen en beheren van textile voor :
                Restaurants, Hotels ,Casino ,en bedrijven , denkt u hierbij aan het reinigen
                En stomen van bedlinnen ,bedgoed, tafellinnen, keukenlinnen etc.
                Bubbles heft een eigen  breng en haal service 6 dagen per week,
                We bieden ook  een huurservices voor  tafellinnen,bedlinnen naast 
                Deskundigheid ( een eerste vereiste ) ,senlheid en betrouwbaarheid
                De belangrijkste kenmerken van ons bedrijf ,proberen we zo goed 
                Mogelijk uwproducten in zijn werk te nemen.
                We zorgen ervoor dat deze open zomilieuvriendelijk mogelijke manierworden gereinigd.<br></br>
                ACTIE:voor grote aantal kg wasbeurt geldt 20% korting 
              </p>
              <Button variant="contained" color="secondary">
                {t('Special order')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default translate('translations')(BusinessComponent);
