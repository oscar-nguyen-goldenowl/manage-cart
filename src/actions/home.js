
export const GET_AMOUNT_CATEGORIES = "GET_AMOUNT_CATEGORIES";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";
export const RESET_PRODUCTS = "RESET_PRODUCTs";
export const LOADING = "LOADING";


export const loading = (isLoading) => {
    return {
        type: LOADING,
        isLoading
    }
}

export const getAmountCategories = (data) => {
    
    const amounts = [];
   
    data.forEach(element => {
        if(amounts.indexOf(element.categoryId) === -1){
            amounts.push(element.categoryId);
        }
    });
   
    return {
        type: GET_AMOUNT_CATEGORIES,
        amounts
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
