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

export const fetchThunk = () => {
  return async (dispatch) => {
    dispatch(dataPending());
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        }
      })
      .then((data) =>
        setTimeout(() => {
          if (data) {
            dispatch(dataSuccess(data));
          } else {
            dispatch(dataFailure("Something went wrong..."));
          }
        }, 1000)
      );
  };
};
