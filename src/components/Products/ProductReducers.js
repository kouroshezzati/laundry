import {
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  SELECT_CATEGORY
} from '../PriceList/PriceListActions';
import _ from 'lodash';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './ProductActions';
import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCCESS,
  RESET_SELECTED_PRODUCTS
} from './ProductConstants';

const reducer = (
  state = {
    isFetching: false,
    products: [],
    intactProducts: [],
    selectedCategory: [],
    selectedProducts: {},
    productNumberAdded: [],
    especialOfferProducts: []
  },
  action
) => {
  switch (action.type) {
    case RESET_SELECTED_PRODUCTS:
      return { ...state, selectedProducts: {} };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, isFetching: false, ordered: action.response };
    case ADD_PRODUCT_REQUEST:
    case PRODUCTS_REQUEST:
      return { ...state, isFetching: true };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: false,
        addProductMessage: action.response
      };
    case PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        products: [],
        especialOfferProducts: []
      };
    case PRODUCTS_SUCCESS:
      let intactProducts = _.map(action.response, (value, index) => {
        if (!value.type) {
          delete value.type;
        }
        return value;
      });
      let products = _.groupBy(intactProducts, 'category.name');
      let especialOfferProducts = products['especial offer'];
      delete products['especial offer'];
      return {
        ...state,
        intactProducts,
        isFetching: false,
        products,
        especialOfferProducts
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
