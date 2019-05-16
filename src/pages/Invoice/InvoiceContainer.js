import { connect } from 'react-redux';
import Invoice from './InvoiceComponent';
import { addOrders } from '../../components/Products/ProductActions';

export default connect(
  state => ({
    ...state.products,
    ...state.user,
    ...state.order
  }),
  { addOrders }
)(Invoice);
