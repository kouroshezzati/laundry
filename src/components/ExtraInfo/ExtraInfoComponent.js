import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Button } from '@material-ui/core';
import './style.css';
import specialoffer from '../ServicesComponent/img/special-offer.gif';
import { NavLink } from 'react-router-dom';
import { fetchProducts } from '../PriceList/PriceListActions';
export class SpecialOffer extends Component {
  componentDidMount() {
    const { especialOfferProducts, fetchProducts } = this.props;
    if (especialOfferProducts.length === 0) {
      fetchProducts();
    }
  }
  render() {
    const { t, especialOfferProducts } = this.props;
    return (
      <section id="special-order">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 special-offer-img-wrapper">
              <img alt="laundry" src={specialoffer} />
            </div>
            <div className="col-12 col-md-7">
              <div className="special-offer-message container">
                <h2 className="text-center">{t('SPECIAL OFFER')}</h2>
                <div className="row mt-1 mb-2">
                  {especialOfferProducts.map(offer => (
                    <div
                      key={offer.id}
                      className="col-md-6 col-12 mt-1 mb-1"
                    >
                      <div className="row">
                        <div className="offer-name col-9">
                          {t(offer.name.toLowerCase())}
                        </div>
                        <div className="offer-price col-3">
                          <span className="mr-1">&euro;</span>{offer.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <NavLink to="/date?type=especial_offer">
                <Button variant="contained" color="primary" fullWidth>
                  {t('SPECIAL ORDER')}
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

SpecialOffer = connect(
  state => ({ ...state.products }),
  { fetchProducts }
)(SpecialOffer);

export default translate('translations')(SpecialOffer);
