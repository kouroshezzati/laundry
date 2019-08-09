import {
  PICKUP_DATE,
  DELIVER_DATE,
  RESET_ORDER,
  CHANGE_DESCRIPTION,
  DELIVER_TIME,
  PICKUP_TIME,
  GET_PAYMENT_FAILURE,
  GET_PAYMENT_SUCCESS,
  GET_PAYMENT_REQUEST,
  RESET_PAYMENT
} from './OrderConstants';
import {
  ADD_INVOICE_SUCCESS,
  ADD_INVOICE_FAILURE,
  ADD_INVOICE_REQUEST,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE
} from './OrderConstants';
import orderListReducer from '../../components/OrderList/OrderListReducer';
import {
  MY_ORDER_FAILURE,
  MY_ORDER_REQUEST,
  MY_ORDER_SUCCESS
} from '../../components/OrderList/OrderListActions';
const deliverTime = new Date();
const pickupTime = new Date();
deliverTime.setHours(9, 0, 0);
pickupTime.setHours(9, 0, 0);
const pickupDate = new Date();
const deliverDate = new Date();
deliverDate.setDate(deliverDate.getDate() + 1);

export default (
  state = {
    deliverTime,
    pickupTime,
    deliverDate,
    pickupDate
  },
  action
) => {
  if (!state.payment) {
    state.payment = { metadata: {} };
  }
  switch (action.type) {
    case RESET_PAYMENT:
      return { ...state, payment: { metadata: {} } };
    case GET_PAYMENT_FAILURE:
      return { ...state, isFetching: false };
    case GET_PAYMENT_SUCCESS:
      return { ...state, payment: action.response };
    case GET_PAYMENT_REQUEST:
      return { ...state, isFetching: true };
    case CHANGE_DESCRIPTION:
      return { ...state, description: action.description };
    case RESET_ORDER:
      return { ...state, pickupDate: '', deliverDate: '', orderId: undefined };
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
      const _pD = new Date(action.date);
      const _pT = new Date(state.pickupTime);
      _pD.setHours(_pT.getHours(), _pT.getMinutes(), _pT.getSeconds());
      const _currentDeliverDate = new Date(state.deliverDate);
      if (_currentDeliverDate.getDate() <= _pD.getDate()) {
        const _deliverDate = new Date();
        _deliverDate.setDate(_pD.getDate() + 1);
        return {
          ...state,
          pickupDate: _pD,
          deliverDate: _deliverDate
        };
      } else {
        return { ...state, pickupDate: _pD };
      }
    case DELIVER_DATE:
      const _dD = new Date(action.date);
      const _dT = new Date(state.deliverTime);
      _dD.setHours(_dT.getHours(), _dT.getMinutes(), _dT.getSeconds());
      return { ...state, deliverDate: _dD };
    case DELIVER_TIME:
      const deliverDate = new Date(state.deliverDate);
      const _deliverTime = new Date(action.date);
      deliverDate.setHours(
        _deliverTime.getHours(),
        _deliverTime.getMinutes(),
        _deliverTime.getSeconds()
      );
      return { ...state, deliverTime: action.date, deliverDate };
    case PICKUP_TIME:
      const pickupDate = new Date(state.pickupDate);
      const _pickupTime = new Date(action.date);
      pickupDate.setHours(
        _pickupTime.getHours(),
        _pickupTime.getMinutes(),
        _pickupTime.getSeconds()
      );
      return { ...state, pickupTime: action.date, pickupDate };
    case MY_ORDER_FAILURE:
    case MY_ORDER_REQUEST:
    case MY_ORDER_SUCCESS:
      return orderListReducer(state, action);
    default:
      return state;
  }
};
