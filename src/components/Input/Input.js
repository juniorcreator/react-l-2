import React from "react";
import "./Input.scss";

const Input = props => {
  const isInvalid = ({ valid, touched, shouldValidate }) => {
    return !valid && shouldValidate && touched;
  };
  let randId = "n" + Math.random();
  let { label, type, placeholder, errorMessage, onChange, name } = props;
  let cls = ["form-group", "input"];
  let errDiv = (
    <div className="invalid-feedback">
      {errorMessage || "Enter correct value"}
    </div>
  );
  cls.push(isInvalid(props) ? "invalid" : "");
  cls.push(type === "checkbox" ? "checkbox" : "");
  return (
    <div className={cls.join(" ")}>
      <label htmlFor={randId}>{label}</label>
      <input
        name={name}
        placeholder={placeholder || "Enter text"}
        id={randId}
        type={type || "text"}
        onChange={onChange}
        className="form-control"
      />
      {type === "checkbox" && <span>I agree</span>}
      {isInvalid(props) && errDiv}
    </div>
  );
};

export default Input;
