import {ACTION_CART} from '../../actions';

const stateInitial = {
    // my state
    cart: "cart state"
}

const CartReducer = (state = stateInitial, action) => {
        switch(action.type){ 
            default :
                return state
        }
}

export default  CartReducer ;