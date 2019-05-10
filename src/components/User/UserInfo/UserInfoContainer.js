import { connect } from 'react-redux';
import { userUpdate } from '../UserActions';
import UserInfoComponent from './UserInfoComponent';

export default connect(
  state => ({ ...state.user }),
  { userUpdate }
)(UserInfoComponent);
