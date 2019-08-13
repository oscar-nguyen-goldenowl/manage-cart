import { 
    GET_AMOUNT_CATEGORIES,
    GET_PRODUCT_SUCCESS, 
    GET_PRODUCT_ERROR,
    RESET_PRODUCTS,
    LOADING 
} from '../../actions';

const stateInitial = {
    // my state
    products: [],
    error: [],
    amounts: [],
    isLoading: false
}

const HomeReducer = (state = stateInitial, action) => {
        switch(action.type){
            case GET_AMOUNT_CATEGORIES:
                    return {...state, amounts: action.amounts}
            case GET_PRODUCT_SUCCESS:
                return {...state, products: action.products}
            case GET_PRODUCT_ERROR:
                return {...state, error: action.error}
            case RESET_PRODUCTS:
                return {...state, products: action.products}
            case LOADING:
                return {...state, isLoading: action.isLoading}
            default :
                return state
        }
}

export default HomeReducer;