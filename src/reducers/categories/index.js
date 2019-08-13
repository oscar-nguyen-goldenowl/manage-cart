import { 
    GET_PRODUCT_CATEGORY_SUCCESS, 
    GET_PRODUCT_CATEGORY_ERROR,
    RESET_PRODUCT
} from '../../actions';

const stateInitial = {
    // my state
    products: [],
    error: [],
  
}

const ProductReducer = (state = stateInitial, action) => {
        switch(action.type){
            case GET_PRODUCT_CATEGORY_SUCCESS:
                return {...state, products: action.products}
            case GET_PRODUCT_CATEGORY_ERROR:
                return {...state, error: action.error}
            case RESET_PRODUCT:
                return {...state, products: action.products}
            default :
                return state
        }
}

export default ProductReducer;