import {
  MY_ORDER_FAILURE,
  MY_ORDER_REQUEST,
  MY_ORDER_SUCCESS,
  RowPerPage
} from './OrderListActions';

export default (state = { myOrders: {} }, action) => {
  switch (action.type) {
    case MY_ORDER_SUCCESS:
      const { count, page } = action.response;
      return {
        ...state,
        myOrders: action.response,
        pageCount: Math.ceil(count / RowPerPage),
        page
      };
    case MY_ORDER_REQUEST:
      return { ...state, isFetching: true };
    case MY_ORDER_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};
