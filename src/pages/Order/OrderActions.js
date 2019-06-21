import { API_ROOT, CALL_API } from '../../constants';
import {
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE,
  ADD_INVOICE_FAILURE,
  ADD_INVOICE_REQUEST,
  ADD_INVOICE_SUCCESS,
  RESET_ORDER,
  CHANGE_DESCRIPTION
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
  const { description } = getState().order;
  return dispatch({
    [CALL_API]: {
      types: [ADD_ORDER_REQUEST, ADD_ORDER_SUCCESS, ADD_ORDER_FAILURE],
      config: {
        url: `${API_ROOT}/Orders`,
        data: { customerId: id, date: new Date(), description },
        method: 'post'
      }
    }
  });
};

export const addInvoice = () => (dispatch, getState) => {
  const { orderId } = getState().order;
  const { selectedProducts } = getState().products;
  const data = _.map(selectedProducts, (number, productId) => ({
    number,
    productId
  }));
  return dispatch({
    [CALL_API]: {
      types: [ADD_INVOICE_REQUEST, ADD_INVOICE_SUCCESS, ADD_INVOICE_FAILURE],
      config: {
        url: `${API_ROOT}/Orders/${orderId}/Invoices`,
        data: data,
        method: 'post'
      }
    }
  });
};

export const resetOrderAndSelectedProducts = () => dispatch => {
  dispatch({ type: RESET_ORDER });
  dispatch({ type: RESET_SELECTED_PRODUCTS });
};
