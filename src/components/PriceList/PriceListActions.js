import { API_ROOT, CALL_API } from '../../constants/index';
export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
export const PRODUCTS_FAILURE = 'PRODUCTS_FAILURE';

export const fetchProducts = () => dispatch => {
  return dispatch({
    [CALL_API]: {
      types: [PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE],
      schema: {},
      config: {
        method: 'get',
        url: `${API_ROOT}/Products/`
      }
    }
  });
};
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const selectCategory = value => ({
  type: SELECT_CATEGORY,
  value
});
