import React from "react";
import styles from "./SignUp.module.scss";
import Form from "../Form/Form";

const SignUp = (props) => {
  return (
    <div>
      <h1>Sign Up Form</h1>
      <Form isSignUp={true} />
    </div>
  );
};

export default SignUp;
