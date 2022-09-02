import { registerUser, loginUser, logoutUser } from "../../helpers/dataStorage";

export const signUpThunk = () => {
  return (dispatch) => {
    dispatch(registerUser);
  };
};

export const logInThunk = () => {
  return (dispatch) => {
    dispatch(loginUser);
  };
};
