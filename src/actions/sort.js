export const GET_SORT_KEY = "GET_SORT_KEY";
export const CHANGE_SORT_STATUS = "CHANGE_SORT_STATUS";

export const getValueSort = (sort_key) => {
    return {
        type: GET_SORT_KEY,
        sort_key
    }
}

export const changeSortStatus = (sort_status) => {
    return {
        type: CHANGE_SORT_STATUS,
        sort_status
    }
}