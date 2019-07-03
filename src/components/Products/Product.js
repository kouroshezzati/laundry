import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './ProductActions';
import { setProductNumber } from './ProductActions';
import { translate } from 'react-i18next';

import './style.css';

const styles = theme => ({
  extendedIcon: {
    width: '35px',
    height: '32px',
    minWidth: '52px'
  }
});

class Product extends Component {
  setNumber = (id, type) => {
    this.props.setProductNumber(id, type);
  };
  render() {
    const {
      t,
      parent,
      name,
      classes,
      id,
      selectedProducts,
      intactProducts
    } = this.props;
    if (parent) {
      return <li className="list-group-item parent">{t(name).toUpperCase()}</li>;
    } else {
      const productNumbers = selectedProducts[id] || 0;
      const productPrice =
        intactProducts.find(product => product.id === id).price || 0;
      return (
        <li className="list-group-item">
          <span className="float-left">{t(name.toLowerCase())}</span>
          <span className="float-right product-controllers">
            <Button
              size="small"
              color="secondary"
              variant="contained"
              onClick={e => this.setNumber(id, REMOVE_PRODUCT)}
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
              onClick={e => this.setNumber(id, ADD_PRODUCT)}
            >
              <Add />
            </Button>
            <span className="price-wrapper">
              &euro; {Math.round(productPrice * productNumbers * 100) / 100}
            </span>
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
