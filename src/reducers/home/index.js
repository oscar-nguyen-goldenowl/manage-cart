import { 
    GET_PRODUCT_SUCCESS, 
    GET_PRODUCT_ERROR,
    RESET_PRODUCTS,
    LOADING 
} from '../../actions';

const stateInitial = {
    // my state
    products: [],
    error: "",
    isloading: false
}

const HomeReducer = (state = stateInitial, action) => {
        switch(action.type){
            case GET_PRODUCT_SUCCESS:
                return {...state, products: action.products}
            case GET_PRODUCT_ERROR:
                return {...state, error: action.error}
            case RESET_PRODUCTS:
                return {...state, products: action.products}
            case LOADING:
                return {...state, isloading: action.isloading}
            default :
                return state
        }
}

export default HomeReducer;