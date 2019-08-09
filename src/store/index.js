import { combineReducers, createStore } from 'redux';
import {HomeReducer, CartReducer} from '../reducers';


const rootReducer = combineReducers({
    HomeReducer,
    CartReducer
});


const store = createStore(rootReducer);

export default store;