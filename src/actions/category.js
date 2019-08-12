export const GET_PRODUCT_CATEGORY_SUCCESS = "GET_PRODUCT_CATEGORY_SUCCESS";
export const GET_PRODUCT_CATEGORY_ERROR = "GET_PRODUCT_CATEGORY_ERROR";
export const RESET_PRODUCT = "RESET_PRODCUT";

export const getProductCategorySuccess = (product) => {
    return {
        type: GET_PRODUCT_CATEGORY_SUCCESS,
        product
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
        product: {}
    }
}
