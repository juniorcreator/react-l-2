import React from "react";
import "./Input.scss";

const Input = props => {
  function isInvalid({ valid, touched, shouldValidate }) {
    return !valid && shouldValidate && touched;
  }
  let randId = "n" + Math.random();
  let { label, type, placeholder, nameInput, errorMessage, onChange } = props;
  let cls = ["form-group", "input"];
  if (isInvalid(props)) {
    cls.push("invalid");
  }
  if (type === "checkbox") {
    cls.push("checkbox");
  }
  return (
    <div className={cls.join(" ")}>
      <label htmlFor={randId}>{label}</label>
      <input
        name={nameInput}
        placeholder={placeholder || "Enter text"}
        id={randId}
        type={type || "text"}
        onChange={onChange}
        className="form-control"
      />
      {type === "checkbox" && <span>I agree</span>}
      {isInvalid(props) ? (
        <div className="invalid-feedback">
          {errorMessage || "Enter correct value"}
        </div>
      ) : null}
    </div>
  );
};

export default Input;
