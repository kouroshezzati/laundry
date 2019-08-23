import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  USER_SIGNOUT,
  FORGOTTEN_FAILURE,
  FORGOTTEN_REQUEST,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_REQUEST
} from './UserConstants';
import Customer from './Customer';

export default (state = {}, action) => {
  switch (action.type) {
    case FORGOTTEN_FAILURE:
      return { ...state, forgottenPasswordMessage: '', isFetching: false };
    case USER_SIGNOUT:
      return {};
    case GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        ...action.response
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        ...action.response,
        message: undefined,
        isFetching: false
      };
    case LOGIN_SUCCESS:
      const _state = {
        ...Customer.build({
          jwt: action.response.id,
          id: action.response.userId
        }),
        isFetching: false,
        message: undefined
      };
      return _state;
    case UPDATE_USER_FAILURE:
    case LOGIN_FAILURE:
    case GET_CUSTOMER_FAILURE:
    case REGISTER_FAILURE:
      return { ...state, isFetching: false };
    case UPDATE_USER_REQUEST:
    case FORGOTTEN_REQUEST:
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case GET_CUSTOMER_REQUEST:
      return { ...state, isFetching: true };
    default:
      return state;
  }
};
