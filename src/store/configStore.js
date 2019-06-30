import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { save, load } from 'redux-localstorage-simple';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import api from '../middlewares/api';
import products from '../components/Products/ProductReducers';
import user from '../components/User/UserReducer';
import order from '../pages/Order/OrderReducer';

const rootReducer = combineReducers({
  products,
  user,
  order
});

const configureStore = () => {
  return createStore(
    rootReducer,
    load(),
    compose(applyMiddleware(thunk, api, save({debounce: 1000}), logger))
  );
};

export default configureStore;
