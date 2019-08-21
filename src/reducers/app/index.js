import {
  LOADING,
  CHANGE_LOGIN_STATUS,
  GET_PATH_NAME
} from '../../actions';

const stateInitial = {
  isLoading: false,
  pathName: "",
  loginStatus: false,
}

const AppReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: action.isLoading }
    case GET_PATH_NAME:
      return { ...state, pathName: action.pathName }
    case CHANGE_LOGIN_STATUS:
      return { ...state, loginStatus: action.loginStatus }
    default:
      return state
  }
}

export default AppReducer;