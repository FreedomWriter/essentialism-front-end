import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import {
  SignUpButton,
  SignUpButtonContainer,
  SignUpLinkLogin,
} from "./SignUpForm.styles";

import { postRegister } from "../../store/actions/login.actions";

import "../../globals/form.styles.css";

const SignUpForm = ({
  errors,
  touched,
  isSubmitting,
  isValidating,
  values,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      await dispatch(
        postRegister({ username: values.username, password: values.password })
      );

      history.push("/about-values");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <Form className="form">
        <h4>Create an Account</h4>
        <Field
          className="input"
          component="input"
          type="text"
          name="username"
          placeholder="username"
        />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}
        <Field
          className="input"
          component="input"
          type="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <Field
          className="input"
          component="input"
          type="password"
          name="verifyPassword"
          placeholder="Verify Password"
        />
        {touched.verifyPassword && errors.verifyPassword && (
          <p className="errors">{errors.verifyPassword}</p>
        )}
        {/* 
        <span className="terms">
          <label>
            <Field
              className="checkbox"
              component="input"
              type="checkbox"
              checked={values.terms}
              name="terms"
              placeholder="Full Name"
            />
            {touched.terms && errors.terms && (
              <p className="errors">{errors.terms}</p>
            )}
            <span className="terms-text">Terms and Conditions</span>
          </label>
        </span> */}
        <SignUpButtonContainer>
          <SignUpLinkLogin to="/in" disabled={isSubmitting}>
            Log In
          </SignUpLinkLogin>
          <SignUpButton
            type="submit"
            onClick={handleClick}
            disabled={isSubmitting}
          >
            SignUp
          </SignUpButton>
        </SignUpButtonContainer>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ name, email, password, verifyPassword, terms, username }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      verifyPassword: verifyPassword || "",
      terms: terms || false,
      username: username || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Please Enter A Valid Email"),
    password: Yup.string().min(8, "Password must be 8 characters or longer"),
    verifyPassword: Yup.string().min(
      8,
      "Password must be 8 characters or longer and should match"
    ),
    name: Yup.string().required("Required"),
    terms: Yup.boolean()
      .required("Required")
      .oneOf([true], "Must Accept Terms and Conditions"),
    username: Yup.string().required(),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.password !== values.verifyPassword) {
      setErrors({ verifyPassword: "Passwords do not match" });
      setSubmitting(false);
    } else {
      resetForm();
    }
  },
})(SignUpForm);
