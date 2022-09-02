import React from "react";
import Form from "../Form/Form";
import styles from "./LogIn.module.scss";

const LogIn = () => {
  return (
    <div>
      <h1 className={styles.logIn_title}>Log In Form</h1>
      <Form />
    </div>
  );
};

export default LogIn;
