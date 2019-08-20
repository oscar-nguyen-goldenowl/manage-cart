export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const PAY_CART = "PAY_CART";
export const GET_AMOUNTS = "GET_AMOUNTS";

export const addCart = (cart) => {
  alert("Sản phẩm đã được thêm vào giỏ hàng");
  return {
    type: ADD_CART,
    cart
  }
}

export const deleteCart = (idCart) => {
  return {
    type: DELETE_CART,
    idCart
  }
}

export const payCart = () => {
  return {
    type: PAY_CART
  }
}

export const getAmounts = (idCart, amounts) => {
  return {
    type: GET_AMOUNTS,
    idCart,
    amounts
  }
}
