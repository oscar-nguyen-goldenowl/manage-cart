import {ACTION_CART} from '../actions';

const stateInitial = {
    // my state
    cart: "cart"
}

const CartReducer = (state = stateInitial, action) => {
        switch(action.type){
            case ACTION_CART: 
                return "Cart reducer"    
            default :
                return state
        }
}

export { CartReducer };