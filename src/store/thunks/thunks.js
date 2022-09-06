import { registerUser, loginUser, logoutUser } from "../../helpers/dataStorage";
import { formUserPending, formUserSuccess, formUserFailure } from "../actions/formAction";

export const signUpThunk = (values) => {
  return async (dispatch) => {
    try {
      dispatch(formUserPending());
      await registerUser(values);
      dispatch(formUserSuccess());
    } catch (error) {
      dispatch(formUserFailure(error.message));
    }
  };
};

export const logInThunk = (values) => {
  return async (dispatch) => {
    try {
      dispatch(formUserPending());
      await loginUser(values);
      dispatch(formUserSuccess());
    } catch (error) {
      dispatch(formUserFailure(error.message));
    }
  };
};

export const logOutThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(formUserPending());
      await logoutUser();
      dispatch(formUserSuccess());
    } catch (error) {
      dispatch(formUserFailure(error.message));
    }
  };
};
