import { connect } from 'react-redux';
import Invoice from './InvoiceComponent';
import * as orderActions from '../Order/OrderActions';

export default connect(
  state => ({
    ...state.products,
    ...state.user,
    ...state.order
  }),
  { ...orderActions }
)(Invoice);
