import { combineReducers, createStore } from 'redux';
import {
  AppReducer,
  HomeReducer, 
  ProductReducer,
  ProductDetailReducer,
  CartReducer,
} from '../reducers';

const rootReducer = combineReducers({
  AppReducer,
  HomeReducer,
  ProductReducer,
  ProductDetailReducer,
  CartReducer,
});


const store = createStore(rootReducer);

export default store;