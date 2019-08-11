import { API_ROOT, CALL_API } from '../../constants/index';
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  USER_SIGNOUT,
  FORGOTTEN_REQUEST,
  FORGOTTEN_SUCCESS,
  FORGOTTEN_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_FAILURE
} from './UserConstants';

export const sendResetPasswordCode = email => {
  return {
    [CALL_API]: {
      types: [FORGOTTEN_REQUEST, FORGOTTEN_SUCCESS, FORGOTTEN_FAILURE],
      config: {
        url: `${API_ROOT}/Customers/reset`,
        data: { email },
        method: 'post'
      }
    }
  };
};

export const resetPassword = data => {
  return {
    [CALL_API]: {
      types: [
        RESET_PASSWORD_REQUEST,
        RESET_PASSWORD_SUCCESS,
        RESET_PASSWORD_FAILURE
      ],
      config: {
        url: `${API_ROOT}/Customers/reset-password`,
        data: { newPassword: data.password },
        method: 'post',
        headers: {
          Authorization: data.code
        }
      }
    }
  };
};

export const register = data => {
  return {
    [CALL_API]: {
      types: [REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE],
      config: {
        url: `${API_ROOT}/Customers`,
        data: { ...data },
        method: 'post'
      }
    }
  };
};

export const userUpdate = data => (dispatch, getState) => {
  const { user } = getState();
  if (!user.id || !user.jwt) {
    return dispatch({ type: UPDATE_USER_FAILURE });
  }
  return dispatch({
    [CALL_API]: {
      types: [UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE],
      config: {
        url: `${API_ROOT}/Customers/${user.id}`,
        data,
        method: 'patch',
        headers: {
          Authorization: user.jwt
        }
      }
    }
  });
};

export const login = (identifier, password) => {
  let _identifier = {};
  if (identifier && identifier.includes('@')) {
    _identifier.email = identifier;
  } else {
    _identifier.username = identifier;
  }
  return {
    [CALL_API]: {
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
      config: {
        url: `${API_ROOT}/Customers/login`,
        data: { ..._identifier, password },
        method: 'post'
      }
    }
  };
};

export const getCustomer = id => (dispatch, getState) => {
  const { user } = getState();
  if (!user.jwt) {
    return dispatch({
      type: GET_CUSTOMER_REQUEST,
      message: 'There is no token!'
    });
  }
  return dispatch({
    [CALL_API]: {
      types: [GET_CUSTOMER_REQUEST, GET_CUSTOMER_SUCCESS, GET_CUSTOMER_FAILURE],
      config: {
        url: `${API_ROOT}/Customers/${id}`,
        method: 'get',
        headers: {
          Authorization: user.jwt
        }
      }
    }
  });
};

export const signout = () => ({
  type: USER_SIGNOUT
});
