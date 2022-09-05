import React from "react";
import Form from "../Form/Form";
import { useSelector } from "react-redux";
import { logInThunk } from "../../store/thunks/thunks";
import { clearLogInState } from "../../store/actions/logInAction";
import styles from "./LogIn.module.scss";

const LogIn = () => {
  const logInErrorMessage = useSelector((state) => state.logInReducer.error);
  return (
    <div>
      <h1 className={styles.logInTitle}>Log In Form</h1>
      <Form submitHandler={logInThunk} redirectRoute="/" clearState={clearLogInState} />
      <p>{logInErrorMessage}</p>
    </div>
  );
};

export default LogIn;
