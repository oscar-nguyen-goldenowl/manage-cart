import { 
    GET_AMOUNT_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR,
    GET_PRODUCT_CATEGORY_SUCCESS, 
    GET_PRODUCT_CATEGORY_ERROR,
    RESET_PRODUCT
} from '../../actions';

const stateInitial = {
    // my state
    products: [],
    categories: [],
    error: null,
  
}

const ProductReducer = (state = stateInitial, action) => {
        switch(action.type){
            case GET_AMOUNT_CATEGORIES:
                return {...state, amounts: action.amounts}
            case GET_CATEGORIES_SUCCESS:
                return {...state, categories: action.categories}
            case GET_CATEGORIES_ERROR:
                return {...state, error: action.error}
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