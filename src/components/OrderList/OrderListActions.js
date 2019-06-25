import { CALL_API, API_ROOT } from '../../constants';

export const MY_ORDER_REQUEST = 'MY_ORDER_REQUEST';
export const MY_ORDER_SUCCESS = 'MY_ORDER_SUCCESS';
export const MY_ORDER_FAILURE = 'MY_ORDER_FAILURE';

export const RowPerPage = 2;

export const getMyOrders = page => (dispatch, getState) => {
  const { id } = getState().user;
  if (!id) {
    return dispatch({
      type: MY_ORDER_FAILURE,
      message: 'There is no customer id!'
    });
  }
  page = (isNaN(page) || !page) ? 0 : page;
  const skip = RowPerPage * page;
  return dispatch({
    [CALL_API]: {
      types: [MY_ORDER_REQUEST, MY_ORDER_SUCCESS, MY_ORDER_FAILURE],
      config: {
        url: `${API_ROOT}/MyOrders/${id}?skip=${skip}&limit=${RowPerPage}`,
        method: 'get'
      }
    }
  });
};
