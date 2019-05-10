import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  USER_SIGNOUT
} from './UserConstants';

export default (state = { isLoggedin: false }, action) => {
  switch (action.type) {
    case USER_SIGNOUT:
      return { ...state, user: undefined, isLoggedin: false };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.response,
        isLoggedin: true,
        message: undefined,
        isFetching: false
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      const _state = {
        ...state,
        ...action.response,
        isFetching: false,
        message: undefined,
        isLoggedin: true
      };
      return _state;
    case UPDATE_USER_FAILURE:
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return { isFetching: false, ...action };
    case UPDATE_USER_REQUEST:
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};
