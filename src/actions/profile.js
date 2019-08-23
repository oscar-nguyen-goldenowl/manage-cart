export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";
export const CHANGE_PROFILE = "CHANGE_PROFILE";



export const getProfileSuccess = (profile) => {
  return {
    type: GET_PROFILE_SUCCESS,
    profile
  }
}

export const getProfileError = (error) => {
  return {
    type: GET_PROFILE_ERROR,
    error
  }
}

export const changeProfile = (profile) => {
  return {
    type: CHANGE_PROFILE,
    profile
  }
}