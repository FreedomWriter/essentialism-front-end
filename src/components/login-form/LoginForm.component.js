import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import * as Yup from "yup";

import { postLogin } from "../../store/actions/login.actions";
import { getUser } from "../../store/actions/user.actions";
import { getUserValues } from "../../store/actions/user-values.actions";
import { getUserProjects } from "../../store/actions/projects.actions";

import { LoginLinkSignUp, StyledLoginForm } from "./LoginForm.styles";
import { SignUpButtonContainer } from "../sign-up-form/SignUpForm.styles";
import { StyledInput, StyledLabel } from "../../ui/custom-forms/CustomForm";
import { CustomButton } from "../../ui/custom-button/CustomButton";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  function handleChanges(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const login = await dispatch(postLogin(formValues));
      await dispatch(getUser(login.payload.user.id));
      await dispatch(getUserValues(login.payload.user.id));
      //user_value_id is required for route, but not used to look up projects
      await dispatch(
        getUserProjects({ user_id: login.payload.user.id, user_value_id: 1 })
      );
      setFormValues({
        username: "",
        password: "",
      });
      return history.push("/home");
    } catch (err) {
      return alert(err);
    }
  };

  /*
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(5, "Password must be 5 characters or longer")
      .required("Required"),
  */

  return (
    <StyledLoginForm onSubmit={handleClick}>
      <h4>Welcome back</h4>
      <StyledLabel htmlFor="username">Username:</StyledLabel>
      <StyledInput
        id="username"
        name="username"
        value={formValues.username}
        placeholder=""
        onChange={handleChanges}
      />
      <StyledLabel htmlFor="password">Password:</StyledLabel>
      <StyledInput
        id="password"
        name="password"
        type="password"
        value={formValues.password}
        placeholder=""
        onChange={handleChanges}
      />
      <SignUpButtonContainer>
        <CustomButton
          type="submit"
          disabled={
            formValues.username.length > 0 && formValues.password.length > 7
              ? false
              : true
          }
        >
          Log In
        </CustomButton>
      </SignUpButtonContainer>
      <LoginLinkSignUp to="/up">I don't have an account</LoginLinkSignUp>
    </StyledLoginForm>
  );
};

export default LoginForm;
