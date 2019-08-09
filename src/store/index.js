import { combineReducers, createStore } from 'redux';
import {CartReducer, HomeReducer} from '../reducers';


const rootReducer = combineReducers({
    CartReducer,
    HomeReducer
});


const store = createStore(rootReducer);

export default store;