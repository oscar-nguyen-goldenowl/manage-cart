
export const GET_AMOUNT_PRODUCT = "GET_AMOUNT_PRODUCT";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";
export const RESET_PRODUCTS = "RESET_PRODUCTs";
export const LOADING = "LOADING";
export const GET_PATH_NAME = "GET_PATH_NAME";
export const CHANGE_LOGIN_STATUS = "CHANGE_LOGIN_STATUS";


export const loading = (isLoading) => {
    return {
        type: LOADING,
        isLoading
    }
}

export const getAmountProduct = ({totalItems}) => {
    return {
        type: GET_AMOUNT_PRODUCT,
        amounts: totalItems
    }
}

export const getProductsSuccess = (products) => {
    return {
        type: GET_PRODUCT_SUCCESS,
        products
    }
}

export const getProductsError = (error) => {
    return {
        type: GET_PRODUCT_ERROR,
        error
    }
}


export const resetProducts = () => {
    return {
        type: RESET_PRODUCTS,
        products: []
    }
}

export const getPathname = (pathName) => {
  return {
    type: GET_PATH_NAME,
    pathName
  }
}

export const changeLoginStatus = (loginStatus) => {
  return {
    type: CHANGE_LOGIN_STATUS,
    loginStatus
  }
}
