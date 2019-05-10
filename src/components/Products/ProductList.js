import React, { Component } from 'react';
import _ from 'lodash';
import Product from './Product';
import { translate } from 'react-i18next';

export class ProductList extends Component {
  render() {
    const { products, invoice, t, selectedProducts } = this.props;
    if (invoice) {
      let total = 0;
      return (
        <div
          className="row product-list-wrapper"
          style={{ marginBottom: '20px' }}
        >
          <div key={Math.random()} className="col-md-12">
            <ul
              key={Math.random()}
              className="list-group"
              style={{ boxShadow: '1px 1px 2px' }}
            >
              {_.map(products, (_products, key) =>
                _products.map(product => {
                  total += product.price * (selectedProducts[product.id] || 0);
                  return <Product key={product.id} {...product} />;
                })
              )}
              <li className="list-group-item total-price">
                <span>{`${t('Total amount')}: $${total}`}</span>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    return (
      <div className="row product-list-wrapper">
        {_.map(products, (_products, key) => {
          return (
            <div key={Math.random()} className="col-md-6">
              <ul key={Math.random()} className="list-group">
                {key !== 'null' && <Product name={key} parent />}
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

export default translate('translations')(ProductList);
