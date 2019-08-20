import { 
  GET_SEARCH_KEY,
  CHANGE_SEARCH_STATUS
} from '../../actions';

const stateInitial = {
  search_key: '',
  search_status: false,
  error: null
}

const SearchReducer = (state = stateInitial, action) => {
      switch(action.type){
          case GET_SEARCH_KEY:
            return {...state, search_key: action.search_key}
          case CHANGE_SEARCH_STATUS:
            return {...state, search_status: action.search_status}
          default :
            return state
      }
}

export default SearchReducer;