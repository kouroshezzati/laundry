import { connect } from 'react-redux';
import { fetchProducts } from '../../components/PriceList/PriceListActions';
import Order from './index';

export default connect(
  state => ({
    ...state.order,
    selectedProducts: state.products.selectedProducts
  }),
  { fetchProducts }
)(Order);
