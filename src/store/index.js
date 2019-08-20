import { combineReducers, createStore } from 'redux';
import {
    HomeReducer, 
    ProductReducer,
    ProductDetailReducer,
    CartReducer,
} from '../reducers';


const rootReducer = combineReducers({
    HomeReducer,
    ProductReducer,
    ProductDetailReducer,
    CartReducer,
});


const store = createStore(rootReducer);

export default store;