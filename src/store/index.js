import { combineReducers, createStore } from 'redux';
import {
    HomeReducer, 
    ProductReducer, 
    SortReducer,
    ProductDetailReducer,
    CartReducer,
    SearchReducer
} from '../reducers';


const rootReducer = combineReducers({
    HomeReducer,
    ProductReducer,
    SortReducer,
    ProductDetailReducer,
    CartReducer,
    SearchReducer
});


const store = createStore(rootReducer);

export default store;