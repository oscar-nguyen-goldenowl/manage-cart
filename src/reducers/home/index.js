import { 
    GET_AMOUNT_PRODUCT,
    GET_PRODUCT_SUCCESS, 
    GET_PRODUCT_ERROR,
    RESET_PRODUCTS,
    LOADING ,
    GET_PATH_NAME,
    CHANGE_LOGIN_STATUS
} from '../../actions';

const stateInitial = {
    // my state
    products: [],
    error: [],
    amounts: [],
    isLoading: false,
    pathName: "",
    loginStatus: false,
}

const HomeReducer = (state = stateInitial, action) => {
        switch(action.type){
            case GET_AMOUNT_PRODUCT:
                    return {...state, amounts: action.amounts}
            case GET_PRODUCT_SUCCESS:
                return {...state, products: action.products}
            case GET_PRODUCT_ERROR:
                return {...state, error: action.error}
            case RESET_PRODUCTS:
                return {...state, products: action.products}
            case LOADING:
                return {...state, isLoading: action.isLoading}
            case GET_PATH_NAME:
                return {...state, pathName: action.pathName}
            case CHANGE_LOGIN_STATUS:
                return {...state, loginStatus: action.loginStatus}
            default :
                return state
        }
}

export default HomeReducer;