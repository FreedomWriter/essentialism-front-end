import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { postLogin } from "../../store/actions/login.actions";
import { getUser } from "../../store/actions/user.actions";
import { getUserValues } from "../../store/actions/user-values.actions";
import { getUserProjects } from "../../store/actions/projects.actions";

import { Form } from "../../ui/custom-forms/CustomForm";
import {
  LoginLinkSignUp,
  FormContainer,
  SignUpButtonContainer,
} from "./LoginForm.styles";

import { StyledInput, StyledLabel } from "../../ui/custom-forms/CustomForm";
import { CustomButton } from "../../ui/custom-button/CustomButton";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const authError = useSelector((state) => state.login.error);
  const isLoading = useSelector((state) => state.login.isLoading);
  console.log({ authError });

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState();

  let formSchema = Yup.object().shape({
    username: Yup.string().min(2, "Username must be at least 2 characters"),
    password: Yup.string().min(8, "Password must be 8 characters or longer"),
  });

  useEffect(() => {
    /* We pass the entire state into the entire schema, no need to use reach here. 
    We want to make sure it is all valid before we allow a user to submit */
    formSchema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues, formSchema]);

  function handleChanges(e) {
    setErrorMessage(null);

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (authError) {
      setErrorMessage(authError.message);
    }
  }, [authError]);

  const handleSubmit = async (e) => {
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
      // history.push("/about-values"); huge anti pattern!
      window.location.href = "/about-values";
    } catch (err) {
      return alert(err);
    }
  };

  const handleValidation = (e) => {
    e.persist();
    Yup.reach(formSchema, e.target.name)
      //we can then run validate using the value
      .validate(e.target.value)
      // if the validation is successful, we can clear the error message
      .then((valid) => {
        console.log({ valid });
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
    returned from yup (that we created in our schema) */
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  if (isLoading) {
    return <h1>...Loading...</h1>;
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h1>Welcome back</h1>
        {errorMessage && <h1>{errorMessage}</h1>}
        <StyledLabel htmlFor="username">Username:</StyledLabel>
        <StyledInput
          id="username"
          name="username"
          value={formValues.username}
          placeholder=""
          onChange={handleChanges}
          onBlur={handleValidation}
          autoComplete="username"
        />
        {errors.username.length > 1 && <p>{errors.username}</p>}
        <StyledLabel htmlFor="password">Password:</StyledLabel>
        <StyledInput
          id="password"
          name="password"
          type="password"
          value={formValues.password}
          placeholder=""
          onChange={handleChanges}
          onBlur={handleValidation}
          autoComplete="current-password"
        />
        {errors.password.length > 7 && <p>{errors.password}</p>}
        <SignUpButtonContainer isDisabled={buttonDisabled}>
          <CustomButton type="submit" disabled={buttonDisabled}>
            Log In
          </CustomButton>
        </SignUpButtonContainer>
        <LoginLinkSignUp to="/up">I don't have an account</LoginLinkSignUp>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
