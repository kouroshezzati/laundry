// import { API_ROOT, CALL_API } from '../../constants/index';
import response from './Products.json';
export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
export const PRODUCTS_FAILURE = 'PRODUCTS_FAILURE';

export const fetchProducts = () => dispatch => {
  // return {
  //   [CALL_API]: {
  //     types: [PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE],
  //     schema: {},
  //     config: {
  //       method: 'get',
  //       url: `${API_ROOT}/products/`
  //     }
  //   }
  // };
  return dispatch({type: PRODUCTS_SUCCESS, response})
};
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const selectCategory = value => ({
  type: SELECT_CATEGORY,
  value
});
