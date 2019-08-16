import { 
    GET_PRODUCT_DETAIL_SUCCESS,
    GET_PRODUCT_DETAIL_ERROR
} from '../../actions';

const stateInitial = {
   product: {},
   amounts: 0,
   error: null
}

const HomeReducer = (state = stateInitial, action) => {
        switch(action.type){
            case GET_PRODUCT_DETAIL_SUCCESS:
                return {...state, product: action.product}
            case GET_PRODUCT_DETAIL_ERROR:
                return {...state, error: action.error}
            default :
                return state
        }
}

export default HomeReducer;