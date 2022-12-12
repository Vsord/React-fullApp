import { React, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { clearFormState } from "../../store/actions/formAction";
import { signUpThunk } from "../../store/thunks/thunks";
import Form from "../Form/Form";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.signUpBlock} id={theme ? styles.light : styles.dark}>
      <h1 className={styles.signUpTitle}>Sign Up</h1>
      <Form
        isSignUp
        submitHandler={signUpThunk}
        clearState={clearFormState}
        redirectRoute="/login"
      />
    </div>
  );
};

export default SignUp;
