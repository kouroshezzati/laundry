import { API_ROOT, CALL_API } from '../../constants';
import {
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE,
  RESET_ORDER,
  CHANGE_DESCRIPTION,
  GET_PAYMENT_SUCCESS,
  GET_PAYMENT_FAILURE,
  GET_PAYMENT_REQUEST,
  RESET_PAYMENT
} from './OrderConstants';
import _ from 'lodash';
import { RESET_SELECTED_PRODUCTS } from '../../components/Products/ProductConstants';

export const setDate = (date, type) => ({
  type,
  date
});

export const setDescription = description => ({
  type: CHANGE_DESCRIPTION,
  description
});

export const addOrder = () => (dispatch, getState) => {
  const { id } = getState().user;
  const { description, pickupDate, deliverDate } = getState().order;
  const { selectedProducts } = getState().products;
  let invoices = [];
  _.map(selectedProducts, (number, productId) => {
    if (!number) return;
    invoices.push({ number, productId });
  });
  return dispatch({
    [CALL_API]: {
      types: [ADD_ORDER_REQUEST, ADD_ORDER_SUCCESS, ADD_ORDER_FAILURE],
      config: {
        url: `${API_ROOT}/AddOrder`,
        data: {
          customerId: id,
          invoices,
          description,
          pickup_date: pickupDate,
          deliver_date: deliverDate
        },
        method: 'post'
      }
    }
  });
};

export const resetOrderAndSelectedProducts = () => dispatch => {
  dispatch({ type: RESET_ORDER });
  dispatch({ type: RESET_SELECTED_PRODUCTS });
};

export const getPayment = (id, customerId) => dispatch => {
  return dispatch({
    [CALL_API]: {
      types: [GET_PAYMENT_REQUEST, GET_PAYMENT_SUCCESS, GET_PAYMENT_FAILURE],
      config: {
        url: `${API_ROOT}/PaidOrder/${id}/${customerId}`,
        method: 'get'
      }
    }
  });
};

export const resetPayment = () => ({
  type: RESET_PAYMENT
})