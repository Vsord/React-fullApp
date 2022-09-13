import { React } from "react";
import { clearFormState } from "../../store/actions/formAction";
import { signUpThunk } from "../../store/thunks/thunks";
import Form from "../Form/Form";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  return (
    <div className={styles.signUpBlock}>
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
