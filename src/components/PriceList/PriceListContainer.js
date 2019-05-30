import { connect } from 'react-redux';
import * as PriceListActions from './PriceListActions';
import PriceListComponent from './PriceListComponent';

const mapStateToProps = state => ({
  ...state.products
});

export default connect(
  mapStateToProps,
  { ...PriceListActions }
)(PriceListComponent);
