import {
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  SELECT_CATEGORY
} from '../PriceList/PriceListActions';
import _ from 'lodash';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './ProductActions';

const reducer = (
  state = {
    isFetching: false,
    products: [],
    intactProducts: [],
    selectedCategory: [],
    selectedProducts: {}
  },
  action
) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return { ...state, isFetching: true };
    case PRODUCTS_FAILURE:
      return { ...state, isFetching: false, products: [] };
    case PRODUCTS_SUCCESS:
      let products = _.groupBy(action.response, 'category.name');
      return {
        ...state,
        intactProducts: action.response,
        isFetching: false,
        products
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: _.groupBy(state.products[action.value], 'type')
      };
    case ADD_PRODUCT:
    case REMOVE_PRODUCT:
      if (!state.selectedProducts[action.id]) {
        state.selectedProducts[action.id] = 0;
      }
      let selectedProducts = { ...state.selectedProducts };
      if (ADD_PRODUCT === action.type) {
        selectedProducts[action.id] = selectedProducts[action.id] + 1;
      } else if (selectedProducts[action.id] > 0) {
        selectedProducts[action.id] = selectedProducts[action.id] - 1;
      }
      return { ...state, selectedProducts };
    default:
      return state;
  }
};

export default reducer;
