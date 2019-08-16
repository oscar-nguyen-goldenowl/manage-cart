import { combineReducers, createStore } from 'redux';
import {HomeReducer, ProductReducer, SearchReducer} from '../reducers';


const rootReducer = combineReducers({
    HomeReducer,
    ProductReducer,
    SearchReducer
});


const store = createStore(rootReducer);

export default store;