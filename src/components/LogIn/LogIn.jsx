import React from "react";
import Form from "../Form/Form";
import { logInThunk } from "../../store/thunks/thunks";
import { clearFormState } from "../../store/actions/formAction";
import styles from "./LogIn.module.scss";

const LogIn = () => {
  return (
    <div>
      <h1 className={styles.logInTitle}>Log In Form</h1>
      <Form submitHandler={logInThunk} redirectRoute="/" clearState={clearFormState} />
    </div>
  );
};

export default LogIn;
