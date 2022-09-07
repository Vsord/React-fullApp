import { React } from "react";
import Form from "../Form/Form";
import { signUpThunk } from "../../store/thunks/thunks";
import { clearFormState } from "../../store/actions/formAction";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  return (
    <div>
      <h1 className={styles.signUpTitle}>Sign Up Form</h1>
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
