import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { SignUpButtonContainer } from "./styled";
import { CustomButton } from "../../ui/custom-button/CustomButton";

import { LoginLinkSignUp as SigninLink } from "../login-form/styled";

import { postRegister } from "../../store/actions/login.actions";

import { StyledInput, StyledLabel, Form } from "../../ui/custom-forms";

const SignUpForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    verifyPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    verifyPassword: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState();

  let formSchema = Yup.object().shape({
    username: Yup.string().min(2, "Username must be at least 2 characters"),
    password: Yup.string().min(8, "Password must be 8 characters or longer"),
    verifyPassword: Yup.string().matches(
      formValues.password,
      "Password do not match"
    ),
  });
  // console.log({ formValues });

  function handleChanges(e) {
    // e.persist();
    // Yup.reach(formSchema, e.target.name)
    //   //we can then run validate using the value
    //   .validate(e.target.value)
    //   // if the validation is successful, we can clear the error message
    //   .then((valid) => {
    //     setButtonDisabled(!valid);
    //     setErrors({
    //       ...errors,
    //       [e.target.name]: "",
    //     });
    //   })
    //   /* if the validation is unsuccessful, we can set the error message to the message
    //   returned from yup (that we created in our schema) */
    //   .catch((err) => {
    //     setErrors({
    //       ...errors,
    //       [e.target.name]: err.errors[0],
    //     });
    //   });
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
      await setFormValues({
        username: "",
        password: "",
        verifyPassword: "",
      });
      history.push("/about-values");
    } catch (err) {
      console.log(err);
    }
  };

  function btnDisable() {
    console.log(Object.values(errors));
  }
  btnDisable();

  return (
    <Form onSubmit={handleClick}>
      <StyledLabel htmlFor="username">Username:</StyledLabel>
      <StyledInput
        id="username"
        name="username"
        value={formValues.username}
        placeholder="What would you like to be called?"
        onChange={handleChanges}
      />
      {/* {errors.username.length > 1 ? (
        <p className="error">{errors.username}</p>
      ) : null} */}
      {formValues.username.length > 1 ? (
        <p className="error">Username must be at least 2 characters</p>
      ) : null}
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
        placeholder="retype password"
        onChange={handleChanges}
      />

      {/* {errors.verifyPassword.length > 7 ? (
        <p className="error">{errors.verifyPassword}</p>
      ) : null} */}
      <SignUpButtonContainer>
        <CustomButton
          type="submit"
          // disabled={buttonDisabled}
        >
          SignUp
        </CustomButton>
      </SignUpButtonContainer>
      <SigninLink to="/in">I already have an account</SigninLink>
    </Form>
  );
};

export default SignUpForm;
