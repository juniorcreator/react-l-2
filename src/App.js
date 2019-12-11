import React from "react";
import Input from "./components/Input/Input";
import { withFormik } from "formik";
import Yup from "yup";
import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <h1>Lesson 2 Formik forms</h1>
      <form className="login-form">
        <Input name="email" type="text" label="Email" />
        <Input name="password" type="password" label="Password" />
        <button className="btn btn-outline-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
