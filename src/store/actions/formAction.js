export const FORM_USER_PENDING = "FORM_USER_PENDING";
export const FORM_USER_SUCCESS = "FORM_USER_SUCCESS";
export const FORM_USER_FAILURE = "FORM_USER_FAILURE";
export const CLEAR_FORM_STATE = "CLEAR_FORM_STATE";

export const formUserPending = () => {
  return {
    type: FORM_USER_PENDING,
  };
};

export const formUserSuccess = () => {
  return {
    type: FORM_USER_SUCCESS,
  };
};

export const formUserFailure = (error) => {
  return {
    type: FORM_USER_FAILURE,
    error,
  };
};

export const clearFormState = () => {
  return {
    type: CLEAR_FORM_STATE,
  };
};
