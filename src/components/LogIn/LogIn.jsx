import React from "react";
import { clearFormState } from "../../store/actions/formAction";
import { logInThunk } from "../../store/thunks/thunks";
import Form from "../Form/Form";
import styles from "./LogIn.module.scss";

const LogIn = () => {
  return (
    <div className={styles.LogInBlock}>
      <h1 className={styles.logInTitle}>Log In</h1>
      <Form submitHandler={logInThunk} redirectRoute="/" clearState={clearFormState} />
    </div>
  );
};

export default LogIn;
