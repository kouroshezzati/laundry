import React, { Component } from 'react';
import _ from 'lodash';
import Product from './Product';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { multipleCurrency, calc, ADD } from '../../utils/components';
import { withRouter } from 'react-router-dom';
import paid from '../../assets/images/paid.jpg';

export class ProductList extends Component {
  render() {
    const {
      products,
      invoice,
      t,
      orderInvoice,
      selectedProducts,
      intactProducts,
      especialOfferProducts,
      location,
      orderSelectedProducts,
      orderPrice,
      orderStatus
    } = this.props;
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    let total = 0;
    if (invoice) {
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
    } else if (type === 'especial_offer' && especialOfferProducts) {
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
    } else if (type === 'especial_offer' && !especialOfferProducts) {
      return <React.Fragment />;
    } else if (orderInvoice) {
      return (
        <div
          className="row product-list-wrapper"
          style={{ marginBottom: '20px' }}
        >
          <div key={Math.random()} className="col-md-12">
            <ul className="list-group" style={{ boxShadow: '1px 1px 2px' }}>
              {_.map(orderSelectedProducts, (selectedValue, id) => {
                id = parseInt(id, 10);
                const _product = intactProducts.find(
                  value => value.id === id && selectedValue
                );
                if (!_product) {
                  return <React.Fragment key={id} />;
                }
                return (
                  <Product
                    readOnly
                    orderProductNumber={selectedValue}
                    key={id}
                    {..._product}
                  />
                );
              })}
              <li className="list-group-item total-price">
                <span>
                  {`${t('Total amount')}: `}&euro; {orderPrice}
                </span>
                {orderStatus === 'paid' && (
                  <span className="paid-stamp">
                    <img alt="laudry clean and dry" src={paid} />
                  </span>
                )}
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
            <div key={Math.random()} className="col-md-12">
              <ul className="list-group">
                {key !== '' && key !== 'null' && key !== 'undefined' && (
                  <Product name={key} parent />
                )}
                {_products.map(product => (
                  <Product
                    number={selectedProducts[product.id] || 0}
                    key={product.id}
                    {...product}
                  />
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
