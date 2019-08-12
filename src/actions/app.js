export const LOADING = "LOADING";
// export const LOADING_HIDDEN = "LOADING_HIDDEN";

export const loading = (isloading) => {
    return {
        type: LOADING,
        isloading
    }
}

// export const loadingShow = (isloading) => {
//     return {
//         type: LOADING_SHOW,
//         isloading
//     }
// }

// export const loadingHidden = (isloading) => {
//     return {
//         type: LOADING_HIDDEN,
//         isloading
//     }
// }