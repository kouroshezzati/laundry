import { API_ROOT, CALL_API } from '../../constants';
import {
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE,
  RESET_ORDER,
  CHANGE_DESCRIPTION,
  PAID_ORDER
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
        data: { customerId: id, invoices, description },
        method: 'post'
      }
    }
  });
};

export const resetOrderAndSelectedProducts = () => dispatch => {
  dispatch({ type: RESET_ORDER });
  dispatch({ type: RESET_SELECTED_PRODUCTS });
};

export const paidOrder = orderId => ({
  type: PAID_ORDER,
  orderId
});
