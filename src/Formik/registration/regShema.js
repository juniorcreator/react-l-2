import * as Yup from "yup";
const Schema = Yup.object().shape({
  firstName: Yup.string()
    .required("Name is required")
    .min(3, "Name should me more than 3 letters")
    .max(15, "Must not be  more than 15 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(3, "Last Name should me more than 3 letters")
    .max(15, "Must not be  more than 15 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short min length 8")
    .matches(/(?=.*[0-9])/, "Password should contain a number"),
  confirmPassword: Yup.string()
    .required("Confirm password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  agreements: Yup.bool().oneOf([true], "Field must be checked")
});

export default Schema;
