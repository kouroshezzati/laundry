import { connect } from 'react-redux';
import ProductList from './ProductList';
import _ from 'lodash';

export default connect(
  state => ({
    selectedProducts: state.products.selectedProducts,
    products: _.groupBy(state.products.intactProducts, 'type')
  }),
  {}
)(ProductList);
