import { React, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { schema } from "../../validationSchema/validationSchema";
import Button from "@mui/material/Button";
import styles from "./Form.module.scss";

const Form = (props) => {
  const { clearState, isSignUp, submitHandler, redirectRoute } = props;
  const dispatch = useDispatch();

  const { error, isLoaded } = useSelector((state) => state.formReducer);

  let navigate = useNavigate();
  useEffect(() => {
    if (isLoaded) {
      dispatch(clearState());
      navigate(redirectRoute);
    }
  }, [dispatch, isLoaded, navigate, clearState, redirectRoute]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      ...(isSignUp ? { passwordConfirmation: "" } : {}),
    },
    onSubmit: (values) => {
      dispatch(submitHandler(values));
    },
    validationSchema: schema(isSignUp),
    enableReinitialize: true,
  });

  return (
    <>
      <form className={styles.formBlock} onSubmit={formik.handleSubmit}>
        <div className={styles.formEmail}>
          {formik.errors.email && formik.touched.email && (
            <div className={styles.formEmailError}>{formik.errors.email}</div>
          )}
          <input
            id="email"
            name="email"
            type="text"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className={styles.formPassword}>
          {formik.errors.password && formik.touched.password && (
            <div className={styles.formPasswordError}>{formik.errors.password}</div>
          )}
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="off"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="password">Password</label>
        </div>
        {isSignUp && (
          <div className={styles.formPasswordConfirmation}>
            {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && (
              <div className={styles.formPasswordConfirmationError}>
                {formik.errors.passwordConfirmation}
              </div>
            )}
            <input
              id="passwordConfirmation"
              type="password"
              name="passwordConfirmation"
              autoComplete="off"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="passwordConfirmation">Confirm your password</label>
          </div>
        )}
        <button
          className={styles.formButton}
          type="submit"
          disabled={
            isSignUp
              ? formik.errors.email || formik.errors.password || formik.errors.passwordConfirmation
              : formik.errors.email || formik.errors.password
          }
        >
          Log In
        </button>
        {error ? <div className={styles.formUserErrorMessage}>{error}</div> : null}
      </form>
      <div className={styles.formSignUpBlock}>
        <NavLink to={isSignUp ? "/login" : "/signup"}>
          <Button variant="contained">{isSignUp ? "LogIn" : "Register"}</Button>
        </NavLink>
      </div>
    </>
  );
};

export default Form;
