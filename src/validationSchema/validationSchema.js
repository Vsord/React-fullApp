import * as yup from "yup";

export function schema(isSignUp) {
  return yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().min(6, "Too short").required("Required"),
    passwordConfirmation: isSignUp
      ? yup
          .string()
          .oneOf([yup.ref("password"), null], "Passwords must match")
          .required("Required")
      : null,
  });
}
