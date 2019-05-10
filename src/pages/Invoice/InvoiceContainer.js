import { connect } from 'react-redux';
import Invoice from './InvoiceComponent';

export default connect(state => ({
  ...state.products,
  user: state.user,
  ...state.order
}))(Invoice);
