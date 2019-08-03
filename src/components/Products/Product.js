import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './ProductActions';
import { setProductNumber } from './ProductActions';
import { translate } from 'react-i18next';

import './style.css';
import { multipleCurrency } from '../../utils/components';

const styles = theme => ({
  extendedIcon: {
    width: '35px',
    height: '32px',
    minWidth: '52px'
  }
});

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { sum: 0 };
  }
  setNumber = (product, type) => {
    this.props.setProductNumber(product.id, type);
  };

  render() {
    const {
      t,
      parent,
      name,
      classes,
      id,
      selectedProducts,
      intactProducts,
      readOnly
    } = this.props;

    if (parent) {
      return (
        <li className="list-group-item parent">
          {t(name.trim().toLowerCase()).toUpperCase()}
        </li>
      );
    } else {
      const productNumbers = selectedProducts[id] || 0;
      const _product = intactProducts.find(product => product.id === id);
      return (
        <li className="list-group-item">
          <span className="float-left">{t(name.trim().toLowerCase())}</span>
          <span className="float-right product-controllers">
            <span style={{ width: '60px' }} className="mr-2 text-left">
              &euro; {_product.price}
            </span>
            {!readOnly && (
              <React.Fragment>
                <Button
                  size="small"
                  color="secondary"
                  variant="contained"
                  onClick={e => this.setNumber(_product, REMOVE_PRODUCT)}
                  className={classes.extendedIcon}
                >
                  <Remove />
                </Button>
                <span>{productNumbers}</span>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  className={classes.extendedIcon}
                  onClick={e => this.setNumber(_product, ADD_PRODUCT)}
                >
                  <Add />
                </Button>
                <span className="price-wrapper">
                  &euro; {multipleCurrency(_product.price, productNumbers)}
                </span>
              </React.Fragment>
            )}
          </span>
        </li>
      );
    }
  }
}

export default translate('translations')(
  withStyles(styles)(
    connect(
      state => ({ ...state.products }),
      { setProductNumber }
    )(Product)
  )
);
