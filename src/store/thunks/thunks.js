import { registerUser, loginUser } from "../../helpers/dataStorage";
import { signUpUserPending, signUpUserSuccess, signUpUserFailure } from "../actions/signUpAction";
import { logInUserPending, logInUserSuccess, logInUserFailure } from "../actions/logInAction";

export const signUpThunk = (values) => {
  return async (dispatch) => {
    try {
      dispatch(signUpUserPending());
      await registerUser(values);
      dispatch(signUpUserSuccess());
    } catch (error) {
      dispatch(signUpUserFailure(error.message));
    }
  };
};

export const logInThunk = (values) => {
  return async (dispatch) => {
    try {
      dispatch(logInUserPending());
      await loginUser(values);
      dispatch(logInUserSuccess());
    } catch (error) {
      dispatch(logInUserFailure(error.message));
    }
  };
};
