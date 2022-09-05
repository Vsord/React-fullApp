export const LOGIN_USER_PENDING = "SIGNUP_USER_PENDING";
export const LOGIN_USER_SUCCESS = "SIGNUP_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const CLEAR_LOGIN_STATE = "CLEAR_LOGIN_STATE";

export const logInUserPending = () => {
  return {
    type: LOGIN_USER_PENDING,
  };
};

export const logInUserSuccess = () => {
  return {
    type: LOGIN_USER_SUCCESS,
  };
};

export const logInUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    error,
  };
};

export const clearLogInState = () => {
  return {
    type: CLEAR_LOGIN_STATE,
  };
};
