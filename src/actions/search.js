export const GET_SEARCH_KEY = "GET_SEARCH_KEY";
export const CHANGE_SEARCH_STATUS = "CHANGE_SEARCH_STATUS";

export const getValueSearch = (search_key) => {
    return {
        type: GET_SEARCH_KEY,
        search_key
    }
}

export const changeSearchStatus = (search_status) => {
    return {
        type: CHANGE_SEARCH_STATUS,
        search_status
    }
}