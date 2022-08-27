import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(6, "Too short").required("Required"),
});

export default schema;
