import { 
    GET_SORT_KEY,
    CHANGE_SORT_STATUS
} from '../../actions';

const stateInitial = {
   sort_key: '',
   sort_status: false,
   error: null
}

const SortReducer = (state = stateInitial, action) => {
        switch(action.type){
            case GET_SORT_KEY:
                if(action.sort_key === "default" || action.sort_key === ''){
                    state.error = "Search key is undefined/null"
                }
                return {...state, sort_key: action.sort_key}
            case CHANGE_SORT_STATUS:
                return {...state, sort_status: action.sort_status}
            default :
                return state
        }
}

export default SortReducer;