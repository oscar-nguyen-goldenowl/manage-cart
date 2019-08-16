export const GET_SEARCH_KEY = "GET_SEARCH_KEY";

export const getValueSearch = (search_key) => {
    return {
        type: GET_SEARCH_KEY,
        search_key
    }
}