import { combineReducers, createStore } from 'redux';
import {
    HomeReducer, 
    ProductReducer, 
    SearchReducer,
    ProductDetailReducer,
    CartReducer,
} from '../reducers';


const rootReducer = combineReducers({
    HomeReducer,
    ProductReducer,
    SearchReducer,
    ProductDetailReducer,
    CartReducer
});


const store = createStore(rootReducer);

export default store;