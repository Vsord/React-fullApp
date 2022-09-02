import { React } from "react";
import Form from "../Form/Form";
import styles from "./SignUp.module.scss";

const SignUp = () => {
  return (
    <div>
      <h1 className={styles.signUp_title}>Sign Up Form</h1>
      <Form isSignUp={true} />
    </div>
  );
};

export default SignUp;
