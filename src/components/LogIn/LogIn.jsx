import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { clearFormState } from "../../store/actions/formAction";
import { logInThunk } from "../../store/thunks/thunks";
import Form from "../Form/Form";
import styles from "./LogIn.module.scss";

const LogIn = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.LogInBlock} id={theme ? styles.light : styles.dark}>
      <h1 className={styles.logInTitle}>Log In</h1>
      <Form submitHandler={logInThunk} redirectRoute="/" clearState={clearFormState} />
    </div>
  );
};

export default LogIn;
