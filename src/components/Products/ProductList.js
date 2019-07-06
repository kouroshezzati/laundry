import React, { Component } from 'react';
import _ from 'lodash';
import Product from './Product';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { multipleCurrency, calc, ADD } from '../../utils/components';
import { withRouter } from 'react-router-dom';

export class ProductList extends Component {
  render() {
    const {
      products,
      invoice,
      t,
      selectedProducts,
      intactProducts,
      especialOfferProducts,
      location
    } = this.props;
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (invoice) {
      let total = 0;
      return (
        <div
          className="row product-list-wrapper"
          style={{ marginBottom: '20px' }}
        >
          <div key={Math.random()} className="col-md-12">
            <ul className="list-group" style={{ boxShadow: '1px 1px 2px' }}>
              {_.map(selectedProducts, (value, id) => {
                id = parseInt(id, 10);
                const _product = intactProducts.find(value => value.id === id);
                if (!_product) {
                  return <React.Fragment key={id} />;
                }
                total = calc(
                  ADD,
                  total,
                  multipleCurrency(_product.price, value || 0)
                );
                return <Product key={id} {..._product} />;
              })}
              <li className="list-group-item total-price">
                <span>
                  {`${t('Total amount')}: `}&euro; {total}
                </span>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    if (type === 'especial_offer') {
      return (
        <div className="row product-list-wrapper">
          <div className="col-md-12">
            <ul className="list-group">
              {especialOfferProducts.map(product => (
                <Product key={product.id} {...product} />
              ))}
            </ul>
          </div>
        </div>
      );
    }
    return (
      <div className="row product-list-wrapper">
        {_.map(products, (_products, key) => {
          return (
            <div key={Math.random()} className="col-md-12">
              <ul className="list-group">
                {key !== '' && key !== 'null' && key !== 'undefined' && (
                  <Product name={key} parent />
                )}
                {_products.map(product => (
                  <Product key={product.id} {...product} />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(
  translate('translations')(
    connect(state => ({ ...state.products }))(ProductList)
  )
);
