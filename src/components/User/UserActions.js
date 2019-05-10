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
  USER_SIGNOUT
} from './UserConstants';

export const register = data => {
  return {
    [CALL_API]: {
      types: [REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE],
      config: {
        url: `${API_ROOT}/auth/local/register`,
        data: { ...data },
        method: 'post'
      }
    }
  };
};

export const userUpdate = data => dispatch => {
  if (!data.id) {
    return dispatch({ type: UPDATE_USER_FAILURE });
  }
  return dispatch({
    [CALL_API]: {
      types: [UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE],
      config: {
        url: `${API_ROOT}/users/${data.id}`,
        data,
        method: 'put'
      }
    }
  });
};

export const login = (identifier, password) => {
  return {
    [CALL_API]: {
      types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
      config: {
        url: `${API_ROOT}/auth/local`,
        data: { identifier, password },
        method: 'post'
      }
    }
  };
};

export const signout = () => ({
  type: USER_SIGNOUT
});
