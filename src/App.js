import React from "react";
import Input from "./components/Input/Input";
import "./App.scss";

class App extends React.Component {
  state = {
    isFormValid: false,
    formControls: {
      name: {
        value: "",
        type: "text",
        label: "Name",
        placeholder: "Enter name",
        errorMessage: "Enter min length 4",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 4
        }
      },
      email: {
        value: "",
        type: "email",
        label: "Email",
        placeholder: "Enter email",
        errorMessage: "Enter correct email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: "",
        type: "password",
        label: "Password",
        placeholder: "Enter password",
        errorMessage: "Enter min length is 6",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      },
      repeatPassword: {
        value: "",
        type: "password",
        label: "Repeat Password",
        placeholder: "Repeat Password",
        errorMessage: "Passwords does not match",
        valid: false,
        touched: false,
        validation: {
          required: true,
          repeatPassword: true
        }
      },
      agreement: {
        value: false,
        type: "checkbox",
        label: "Agreements",
        errorMessage: "Please confirm agreements",
        valid: false,
        touched: false,
        validation: {
          required: true,
          noTrim: true,
          agreements: true
        }
      }
    }
  };
  validateEmail = email => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      let control = this.state.formControls[controlName];
      return (
        <Input
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          placeholder={control.placeholder}
          errorMessage={control.errorMessage}
          shouldValidate={!!control.validation}
          onChange={e => this.onChangeHandler(e, controlName)}
          key={index}
        />
      );
    });
  }
  validateControl = (value, validation) => {
    if (!validation) {
      return true;
    }
    let isValid = true;
    if (validation.required && !validation.noTrim) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.email) {
      isValid = this.validateEmail(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }
    if (validation.repeatPassword) {
      isValid = this.state.formControls.password.value === value && isValid;
    }
    if (validation.agreements) {
      isValid = value && isValid;
    }
    return isValid;
  };
  onChangeHandler = (e, controlName) => {
    let formControls = { ...this.state.formControls };
    let control = { ...formControls[controlName] };
    control.value =
      controlName === "agreement" ? e.target.checked : e.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);
    formControls[controlName] = control;
    let isFormValid = true;
    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid;
    });
    this.setState({ formControls, isFormValid });
  };
  render() {
    return (
      <form className="login-form">
        <h1>Lesson 2 simple validation</h1>
        {this.renderInputs()}
        <button
          disabled={!this.state.isFormValid}
          className="btn btn-outline-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default App;
