import { 
    GET_PRODUCT_CATEGORY_SUCCESS, 
    GET_PRODUCT_CATEGORY_ERROR,
    RESET_PRODUCT,
    LOADING 
} from '../../actions';

const stateInitial = {
    // my state
    product: {},
    error: "",
    isloading: false
}

const ProductReducer = (state = stateInitial, action) => {
        switch(action.type){
            case GET_PRODUCT_CATEGORY_SUCCESS:
                return {...state, product: action.product}
            case GET_PRODUCT_CATEGORY_ERROR:
                return {...state, error: action.error}
            case RESET_PRODUCT:
                return {...state, product: action.product}
            case LOADING:
                return {...state, isloading: action.isloading}
            default :
                return state
        }
}

export default ProductReducer;