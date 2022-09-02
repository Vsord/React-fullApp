export const SIGNUP_USER_PENDING = "SIGNUP_USER_PENDING";
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS";
export const SIGNUP_USER_FAILURE = "CONFIRM_PASSWORD";

export const signUpUserPending = (loading) => {
  return {
    type: SIGNUP_USER_PENDING,
    payload: loading,
  };
};

export const signUpUserSuccess = (data) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: data,
  };
};

export const signUpUserFailure = (error) => {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error,
  };
};
