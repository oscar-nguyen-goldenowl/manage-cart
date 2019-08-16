import { 
    GET_SEARCH_KEY,
    CHANGE_SEARCH_STATUS
} from '../../actions';

const stateInitial = {
   search_key: '',
   search_status: false,
   error: null
}

const HomeReducer = (state = stateInitial, action) => {
        switch(action.type){
            case GET_SEARCH_KEY:
                if(action.search_key === "default" || action.search_key === ''){
                    state.error = "Search key is undefined/null"
                }
                return {...state, search_key: action.search_key}
            case CHANGE_SEARCH_STATUS:
                return {...state, search_status: action.search_status}
            default :
                return state
        }
}

export default HomeReducer;