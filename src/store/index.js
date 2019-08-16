import { combineReducers, createStore } from 'redux';
import {
    HomeReducer, 
    ProductReducer, 
    SearchReducer,
    ProductDetailReducer
} from '../reducers';


const rootReducer = combineReducers({
    HomeReducer,
    ProductReducer,
    SearchReducer,
    ProductDetailReducer
});


const store = createStore(rootReducer);

export default store;