import React from "react";
import { Formik } from "formik";
import Schema from "../../Formik/registration/regShema";
import initialValues from "../../Formik/registration/regInitialValues";
import "./Registration.scss";

const Registration = ({ handleShowFun }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          resetForm({});
          handleShowFun();
        }, 500);
      }}
      validationSchema={Schema}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="registration"
          >
            <div className="registration__row">
              <label htmlFor="firstName">First Name</label>
              <input
                className={[
                  "form-control",
                  errors.firstName && touched.firstName && "error"
                ].join(" ")}
                id="firstName"
                value={values.firstName}
                name="firstName"
                placeholder="Enter name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName && (
                <div className="input-feedback">{errors.firstName}</div>
              )}
            </div>
            <div className="registration__row">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={[
                  "form-control",
                  errors.lastName && touched.lastName && "error"
                ].join(" ")}
                id="lastName"
                value={values.lastName}
                name="lastName"
                placeholder="Enter last name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName && (
                <div className="input-feedback">{errors.lastName}</div>
              )}
            </div>
            <div className="registration__row">
              <label htmlFor="email">Email</label>
              <input
                className={[
                  "form-control",
                  errors.email && touched.email && "error"
                ].join(" ")}
                id="email"
                value={values.email}
                name="email"
                placeholder="Enter email"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            </div>
            <div className="registration__row">
              <label htmlFor="password">Password</label>
              <input
                className={[
                  "form-control",
                  errors.password && touched.password && "error"
                ].join(" ")}
                id="password"
                value={values.password}
                name="password"
                placeholder="Enter password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
            </div>
            <div className="registration__row">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className={[
                  "form-control",
                  errors.confirmPassword && touched.confirmPassword && "error"
                ].join(" ")}
                id="confirmPassword"
                value={values.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className="input-feedback">{errors.confirmPassword}</div>
              )}
            </div>
            <div className="registration__row">
              <label htmlFor="agreements">Agreements</label>
              <input
                className={[
                  "form-control checkbox",
                  errors.agreements && touched.agreements && "error"
                ].join(" ")}
                id="agreements"
                value={values.agreements}
                checked={values.agreements}
                name="agreements"
                type="checkbox"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.agreements && touched.agreements && (
                <div className="input-feedback">{errors.agreements}</div>
              )}
            </div>
            <button
              disabled={isSubmitting}
              className="btn btn-outline-primary"
              type="submit"
            >
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default Registration;
