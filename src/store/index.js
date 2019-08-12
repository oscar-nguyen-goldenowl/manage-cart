import { combineReducers, createStore } from 'redux';
import {HomeReducer, ProductReducer} from '../reducers';


const rootReducer = combineReducers({
    HomeReducer,
    ProductReducer
});


const store = createStore(rootReducer);

export default store;