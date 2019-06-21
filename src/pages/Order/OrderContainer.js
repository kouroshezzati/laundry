import { connect } from 'react-redux';
import * as priceListActions from '../../components/PriceList/PriceListActions';
import * as orderActions from './OrderActions';

import Order from './index';

export default connect(
  state => ({
    ...state.order,
    selectedProducts: state.products.selectedProducts
  }),
  { ...priceListActions, ...orderActions }
)(Order);
