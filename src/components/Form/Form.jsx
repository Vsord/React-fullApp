import { React, useState } from "react";
import styles from "./Form.module.scss";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import schema from "../../schema/validationSchema";

const Form = () => {
  const [formData, setFormData] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setFormData(JSON.stringify(values));
    },
    validationSchema: schema,
  });
  return (
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
      <NavLink to="/">
        <button
          className={styles.form_button}
          type="submit"
          disabled={formik.errors.email || formik.errors.password}
        >
          Log In
        </button>
      </NavLink>
    </form>
  );
};

export default Form;
