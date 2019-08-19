import {
  ADD_CART,
  DELETE_CART,
  PAY_CART,
  GET_AMOUNTS
} from '../../actions';

const stateInitial = {
  // my state
  carts: [],
  totalPrice: 0
}

const CartReducer = (state = stateInitial, action) => {
  switch(action.type){
      case ADD_CART:

        if(state.carts.find( cart => cart.id === action.cart.id)){
          // cart is exist in Carts
          state.carts[state.carts.findIndex(cart => cart.id === action.cart.id)].amounts += action.cart.amounts  
        }else{
          // cart is not exist in Carts
          state.carts.push(action.cart)
        }

        state.totalPrice = 0;
        state.carts.forEach(cart => {
          state.totalPrice +=  cart.product.price * cart.amounts
        });

        return {...state}

      case DELETE_CART:
        state.carts.forEach(cart => {
          if(cart.product.id === action.idCart){
            state.totalPrice -=  cart.product.price * cart.amounts
          }
        });

        state.carts = state.carts.filter(cart => cart.product.id !== action.idCart)
        return {...state}

      case PAY_CART:
        return {...state, carts: [], totalPrice: 0}

      case GET_AMOUNTS:
        state.carts[state.carts.findIndex(cart => cart.id === action.idCart)].amounts = action.amounts
       
        state.totalPrice = 0;
        state.carts.forEach(cart => {
          state.totalPrice +=  cart.product.price * cart.amounts
        });
        return {... state}

      default :
        return state
  }
}

export default CartReducer;