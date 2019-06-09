import { connect } from 'react-redux';
import Register from './RegisterComponent';

export default connect(state => {
  if (state.user && state.user.user) {
    return { user: state.user.user };
  }
  return {};
})(Register);
