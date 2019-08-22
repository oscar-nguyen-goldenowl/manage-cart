export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";

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