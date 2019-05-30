import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import { Add, Remove } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './ProductActions';
import { setProductNumber } from './ProductActions';
import './style.css';

const styles = theme => ({
  extendedIcon: {
    width: '35px',
    height: '32px'
  }
});

class Product extends Component {
  setNumber = (id, type) => {
    this.props.setProductNumber(id, type);
  };
  render() {
    const {
      parent,
      name,
      classes,
      id,
      selectedProducts,
      intactProducts
    } = this.props;
    if (parent) {
      return <li className="list-group-item parent">{name}</li>;
    } else {
      const productNumbers = selectedProducts[id] || 0;
      const productPrice =
        intactProducts.find(product => product.id === id).price || 0;
      return (
        <li className="list-group-item">
          <span className="float-left">{name}</span>
          <span className="float-right product-controllers">
            <Fab
              size="small"
              color="secondary"
              aria-label="Add"
              onClick={e => this.setNumber(id, REMOVE_PRODUCT)}
              className={classes.extendedIcon}
            >
              <Remove />
            </Fab>
            <span>{productNumbers}</span>
            <Fab
              size="small"
              color="primary"
              aria-label="Add"
              className={classes.extendedIcon}
              onClick={e => this.setNumber(id, ADD_PRODUCT)}
            >
              <Add />
            </Fab>
            <span className="price-wrapper">
              ${productPrice * productNumbers}
            </span>
          </span>
        </li>
      );
    }
  }
}

export default withStyles(styles)(
  connect(
    state => ({ ...state.products }),
    { setProductNumber }
  )(Product)
);
