import { combineReducers, createStore } from 'redux';
import {
  AppReducer,
  HomeReducer, 
  ProductReducer,
  ProductDetailReducer,
  CartReducer,
  ProfileReducer
} from '../reducers';

const rootReducer = combineReducers({
  AppReducer,
  HomeReducer,
  ProductReducer,
  ProductDetailReducer,
  CartReducer,
  ProfileReducer
});


const store = createStore(rootReducer);

export default store;