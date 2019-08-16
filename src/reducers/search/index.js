import { 
    GET_SEARCH_KEY
} from '../../actions';

const stateInitial = {
   search_key: '',
   error: null
}

const HomeReducer = (state = stateInitial, action) => {
        switch(action.type){
            case GET_SEARCH_KEY:
                if(action.search_key === "default" || action.search_key === ''){
                    state.error = "Search key is undefined/null"
                }
                return {...state, search_key: action.search_key}
            default :
                return state
        }
}

export default HomeReducer;