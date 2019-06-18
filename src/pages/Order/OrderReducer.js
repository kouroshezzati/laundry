import {
  PICKUP_DATE,
  DELIVER_DATE,
  RESET_ORDER,
  CHANGE_DESCRIPTION
} from './OrderConstants';
import {
  ADD_INVOICE_SUCCESS,
  ADD_INVOICE_FAILURE,
  ADD_INVOICE_REQUEST,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE
} from './OrderConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_DESCRIPTION:
      return { ...state, description: action.description };
    case RESET_ORDER:
      return {};
    case ADD_INVOICE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        orderId: action.response.id
      };
    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        orderId: action.response.id
      };
    case ADD_INVOICE_REQUEST:
    case ADD_ORDER_REQUEST:
      return { ...state, isFetching: true };
    case ADD_INVOICE_FAILURE:
    case ADD_ORDER_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    case PICKUP_DATE:
      return {
        ...state,
        pickupDate: action.date.toString(),
        deliverDate: undefined
      };
    case DELIVER_DATE:
      return { ...state, deliverDate: action.date.toString() };
    default:
      return state;
  }
};
