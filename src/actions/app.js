export const LOADING = "LOADING";
export const CHANGE_LOGIN_STATUS = "CHANGE_LOGIN_STATUS";
export const GET_PATH_NAME = "GET_PATH_NAME";

export const loading = (isLoading) => {
  return {
    type: LOADING,
    isLoading
  }
}

export const changeLoginStatus = (loginStatus) => {
  return {
    type: CHANGE_LOGIN_STATUS,
    loginStatus
  }
}

export const getPathname = (pathName) => {
  return {
    type: GET_PATH_NAME,
    pathName
  }
}
