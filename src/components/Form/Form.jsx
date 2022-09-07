import TextField from "@material-ui/core/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { schema } from "../../validationSchema/validationSchema";
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
          <TextField
            id="email"
            name="email"
            type="text"
            label="Email"
            autoComplete="off"
            error={formik.touched.email && Boolean(formik.errors.email)}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div className={styles.formPassword}>
          <TextField
            id="password"
            type="password"
            name="password"
            autoComplete="off"
            label="Password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        {isSignUp && (
          <div className={styles.formPasswordConfirmation}>
            <TextField
              id="passwordConfirmation"
              type="password"
              name="passwordConfirmation"
              autoComplete="off"
              label="Confirm your password"
              error={
                formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)
              }
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
            />
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
      <div className={styles.formToggleButton}>
        <Button
          variant="contained"
          onClick={() => (isSignUp ? navigate("/login") : navigate("/signup"))}
        >
          {isSignUp ? "LogIn" : "Register"}
        </Button>
      </div>
    </>
  );
};

export default Form;
