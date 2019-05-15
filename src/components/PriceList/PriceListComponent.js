import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import _ from 'lodash';
import { isArray } from 'util';

class PriceListComponent extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }
  selectCategory = value => {
    this.props.selectCategory(value);
  };
  render() {
    const { products, selectedCategory } = this.props;
    if (!products || products.length === 0) return <React.Fragment />;
    return (
      <React.Fragment>
        <div className="button-list">
          {_.map(products, (key, value) => (
            <Button
              variant="contained"
              color="primary"
              key={value}
              onClick={e => this.selectCategory(value)}
            >
              {value}
            </Button>
          ))}
        </div>
        <div className="product-list">
          {_.map(selectedCategory, (list, value) => {
            return (
              <div key={Math.random()} className="list-group">
                {value && (
                    <button
                      type="button"
                      className="list-group-item list-group-item-action active"
                    >
                      {value}
                    </button>
                  )}
                {isArray(list) &&
                  list.length > 0 &&
                  list.map(product => (
                    <button
                      type="button"
                      key={product.id}
                      className="list-group-item list-group-item-action"
                    >
                      <div className="float-left">
                        {product.name}
                      </div>
                      <div className="float-right">
                        {product.price}
                      </div>
                    </button>
                  ))}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

PriceListComponent.propTypes = {
  fetchProducts: PropTypes.func.isRequired
};

export default PriceListComponent;
