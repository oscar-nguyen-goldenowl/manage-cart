import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  CHANGE_PROFILE,
} from '../../actions';

const stateInitial = {
  profile: {},
  error: null
}

const ProfileReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {...state, profile: action.profile}
    case GET_PROFILE_ERROR:
      return {...state, error: action.error}
    case CHANGE_PROFILE:
      return {...state, profile: action.profile}
    default:
      return state
  }
}

export default ProfileReducer;