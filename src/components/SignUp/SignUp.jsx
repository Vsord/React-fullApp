import { React } from "react";
import Form from "../Form/Form";
import { signUpThunk } from "../../store/thunks/thunks";
import { clearSignUpState } from "../../store/actions/signUpAction";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  return (
    <div>
      <h1 className={styles.signUpTitle}>Sign Up Form</h1>
      <Form
        isSignUp={true}
        submitHandler={signUpThunk}
        clearState={clearSignUpState}
        redirectRoute="/login"
      />
    </div>
  );
};

export default SignUp;
