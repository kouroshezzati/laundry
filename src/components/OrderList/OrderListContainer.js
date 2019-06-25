import { connect } from 'react-redux';
import * as orderListActions from './OrderListActions';
import OrderListComponent from './OrderListComponent';

export default connect(
  state => ({ ...state.order }),
  { ...orderListActions }
)(OrderListComponent);
