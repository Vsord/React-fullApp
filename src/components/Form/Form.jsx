import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as yup from "yup";
import styles from "./Form.module.scss";

const Form = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(signUpThunk());
    // dispatch(logInThunk());
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      ...(props.isSignUp ? { passwordConfirmation: "" } : {}),
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Invalid email").required("Required"),
      password: yup.string().min(6, "Too short").required("Required"),
      passwordConfirmation: props.isSignUp
        ? yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Required")
        : null,
    }),
    enableReinitialize: true,
  });
  return (
    <>
      <form className={styles.form_block} onSubmit={formik.handleSubmit}>
        <div className={styles.form_email}>
          {formik.errors.email ? (
            <div className={styles.form_email_error}>{formik.errors.email}</div>
          ) : null}
          <input
            id="email"
            name="email"
            type="text"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className={styles.form_password}>
          {formik.errors.password ? (
            <div className={styles.form_password_error}>{formik.errors.password}</div>
          ) : null}
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="off"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        {props.isSignUp && (
          <div className={styles.form_password_confirmation}>
            {formik.errors.passwordConfirmation ? (
              <div className={styles.form_password_confirmation_error}>
                {formik.errors.passwordConfirmation}
              </div>
            ) : null}
            <input
              id="passwordConfirmation"
              type="password"
              name="passwordConfirmation"
              autoComplete="off"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
            />
            <label htmlFor="passwordConfirmation">Confirm your password</label>
          </div>
        )}
        {/* <NavLink to="/"> */}
        <button
          className={styles.form_button}
          type="submit"
          disabled={
            props.isSignUp
              ? formik.errors.email || formik.errors.password || formik.errors.passwordConfirmation
              : formik.errors.email || formik.errors.password
          }
        >
          Log In
        </button>
        {/* </NavLink> */}
      </form>
      <div className={styles.form_signUp_block}>
        <NavLink to={props.isSignUp ? "/login" : "/signup"}>
          <Button variant="contained">{!props.isSignUp ? "Register" : "LogIn"}</Button>
        </NavLink>
      </div>
    </>
  );
};

export default Form;
