import { GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR } from '../../actions';

const stateInitial = {
    // my state
    products: [],
    error: ""
}

const HomeReducer = (state = stateInitial, action) => {
        switch(action.type){
            case GET_PRODUCT_SUCCESS:
                return {...state, products: action.products}
            case GET_PRODUCT_ERROR:
                return {...state, error: action.error}
            default :
                return state
        }
}

export default HomeReducer;