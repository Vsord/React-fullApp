import { registerUser, loginUser, logoutUser } from "../../helpers/dataStorage";
import { dataPending, dataSuccess, dataFailure } from "../actions/fetchAction";
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

export const fetchThunk = (URL) => {
  return async (dispatch) => {
    dispatch(dataPending());
    await fetch(URL)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          dispatch(dataSuccess(data));
          console.log(data);
        } else {
          dispatch(dataFailure("Something went wrong..."));
        }
      });
  };
};
