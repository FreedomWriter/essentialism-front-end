import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import * as Yup from "yup";

import { SignUpButton, SignUpButtonContainer } from "./SignUpForm.styles";

import {
  LoginLinkSignUp as SigninLink,
  StyledLoginForm as StyledSignupForm,
} from "../login-form/LoginForm.styles";

import { postRegister } from "../../store/actions/login.actions";

import { StyledInput, StyledLabel } from "../../ui/custom-forms/CustomForm";

const SignUpForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    verifyPassword: "",
  });

  function handleChanges(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
  const handleClick = async (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.verifyPassword) {
      throw alert("Passwords do not match!!");
    }
    try {
      await dispatch(
        postRegister({
          username: formValues.username,
          password: formValues.password,
        })
      );
      history.push("/about-values");
    } catch (err) {
      console.log(err);
    }
  };

  /* 
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
  })
  */

  return (
    <StyledSignupForm onSubmit={handleClick}>
      <StyledLabel htmlFor="username">Username:</StyledLabel>
      <StyledInput
        id="username"
        name="username"
        value={formValues.username}
        placeholder="What would you like to be called?"
        onChange={handleChanges}
      />
      <StyledLabel htmlFor="password">Password:</StyledLabel>
      <StyledInput
        id="password"
        name="password"
        type="password"
        value={formValues.password}
        placeholder="8 characters minimum"
        onChange={handleChanges}
      />
      <StyledLabel htmlFor="verifyPassword">Verify Password:</StyledLabel>
      <StyledInput
        id="verifyPassword"
        name="verifyPassword"
        type="password"
        value={formValues.verifyPassword}
        placeholder="8 characters minimum"
        onChange={handleChanges}
      />
      <SignUpButtonContainer>
        <SignUpButton type="submit">SignUp</SignUpButton>
      </SignUpButtonContainer>
      <SigninLink to="/in">I already have an account</SigninLink>
    </StyledSignupForm>
  );
};

export default SignUpForm;
