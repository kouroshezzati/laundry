import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_NUMBER_REQUEST,
  ADD_PRODUCT_NUMBER_SUCCESS,
  ADD_PRODUCT_NUMBER_FAILURE
} from './ProductConstants';
import { CALL_API, API_ROOT } from '../../constants';
import _ from 'lodash';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const setProductNumber = (id, operator) => ({
  id,
  type: operator
});

const addOrder = product_id => (dispatch, getState) => {
  const user_id = getState().user.user._id;
  return dispatch({
    [CALL_API]: {
      types: [ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE],
      config: {
        url: `${API_ROOT}/orders`,
        data: { product_id, user_id },
        method: 'post'
      }
    }
  });
};

const addProductNumber = (product_id, number, order_id) => dispatch => {
  return dispatch({
    [CALL_API]: {
      types: [
        ADD_PRODUCT_NUMBER_REQUEST,
        ADD_PRODUCT_NUMBER_SUCCESS,
        ADD_PRODUCT_NUMBER_FAILURE
      ],
      config: {
        url: `${API_ROOT}/productnumbers`,
        data: {
          product_id,
          number,
          order_id
        },
        method: 'post'
      }
    }
  });
};

export const addOrders = () => async (dispatch, getState) => {
  const selectedProducts = getState().products.selectedProducts;
  const result = await dispatch(addOrder());

  if (result.type === ADD_PRODUCT_FAILURE) {
    return;
  }
  const orderId = getState().products.ordered.id;
  //TODO: it need to be improved due to add list of item in one request
  await Promise.all(
    _.map(selectedProducts, (number, id) => {
      dispatch(addProductNumber(id, number, orderId));
    })
  );
};
