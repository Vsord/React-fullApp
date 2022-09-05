export const SIGNUP_USER_PENDING = "SIGNUP_USER_PENDING";
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS";
export const SIGNUP_USER_FAILURE = "SIGNUP_USER_FAILURE";
export const CLEAR_SIGNUP_STATE = "CLEAR_SIGNUP_STATE";

export const signUpUserPending = () => {
  return {
    type: SIGNUP_USER_PENDING,
  };
};

export const signUpUserSuccess = () => {
  return {
    type: SIGNUP_USER_SUCCESS,
  };
};

export const signUpUserFailure = (error) => {
  return {
    type: SIGNUP_USER_FAILURE,
    error,
  };
};

export const clearSignUpState = () => {
  return {
    type: CLEAR_SIGNUP_STATE,
  };
};
