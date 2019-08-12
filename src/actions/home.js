
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";
export const RESET_PRODUCTS = "RESET_PRODUCTs";

// export const getProducts = (pagination) => {
//     // xu ly logic
//     // dung fetch de call API
//     return {
//         type: GET_PRODUCT,
//         pagination
//     }
// };

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
// export const parseData = (rawData) => {
//     // xu ly
//     return {
//         type: 'parse_data',
//         data: [],
//     }
// }