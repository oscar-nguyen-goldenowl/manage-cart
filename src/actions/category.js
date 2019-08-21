export const GET_PRODUCT_CATEGORY_SUCCESS = "GET_PRODUCT_CATEGORY_SUCCESS";
export const GET_PRODUCT_CATEGORY_ERROR = "GET_PRODUCT_CATEGORY_ERROR";
export const RESET_PRODUCT = "RESET_PRODUCT";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_ERROR = "GET_CATEGORIES_ERROR";
export const GET_AMOUNT_CATEGORIES = "GET_AMOUNT_CATEGORIES";

export const getAmountCategories = (amounts) => {
  return {
    type: GET_AMOUNT_CATEGORIES,
    amounts
  }
}


export const getCategoriesSuccess = (categories) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    categories,
  }
}

export const getCategoriesError = (error) => {
  return {
    type: GET_CATEGORIES_ERROR,
    error,
  }
}

export const getProductCategorySuccess = (products) => {
  return {
    type: GET_PRODUCT_CATEGORY_SUCCESS,
    products
  }
}

export const getProductCategoryError = (error) => {
  return {
    type: GET_PRODUCT_CATEGORY_ERROR,
    error
  }
}

export const resetProductCategory = () => {
  return {
    type: RESET_PRODUCT,
    products: {}
  }
}
