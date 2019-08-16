export const GET_PRODUCT_DETAIL_SUCCESS = "GET_PRODUCT_DETAIL_SUCCESS"
export const GET_PRODUCT_DETAIL_ERROR = "GET_PRODUCT_DETAIL_ERROR"

export const getProductDetailSuccess = (product) => {
    return{
        type: GET_PRODUCT_DETAIL_SUCCESS,
        product
    }
}

export const getProductDetailError = (product) => {
    return{
        type: GET_PRODUCT_DETAIL_ERROR,
        product
    }
}