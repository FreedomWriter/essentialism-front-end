import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Form,
  Input,
  Label,
  FormTitle,
  Checkbox,
  TransparentButton,
  Button,
} from "v2";

import { login } from "v2/api";
import {
  LOGIN_MODAL_CLOSE,
  SIGNUP_MODAL_OPEN,
  USER_GET_FAILURE,
  USER_GET_START,
  USER_GET_SUCCESS,
  LOGIN_POST_SUCCESS,
  LOGIN_POST_FAILURE,
} from "v2/utils";

import { Container } from "./styled";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    submissionError: "",
  });

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const addUserToStore = async (user) => {
    const sanitizedUser = {
      fullName: user.user_metadata.full_name,
      id: user.id,
      role: user.role,
      email: user.email,
      token: {
        accessToken: user.token.access_token,
        refreshToken: user.token.refresh_token,
        expiresIn: user.token.expires_in,
        expiresAt: user.token.expires_at,
      },
      createdAt: user.created_at,
      confirmedAt: user.confirmed_at,
      updatedAt: user.updated_at,
    };
    try {
      await dispatch({ type: USER_GET_START, payload: sanitizedUser });
      await dispatch({
        type: USER_GET_SUCCESS,
        payload: {
          user: sanitizedUser,
          error: false,
        },
      });
      await dispatch({
        type: LOGIN_POST_SUCCESS,
      });
      await dispatch({ type: LOGIN_MODAL_CLOSE });
    } catch (err) {
      dispatch({
        type: USER_GET_FAILURE,
        payload: {
          error: "Something went wrong, please try again.",
        },
      });
      await dispatch({
        type: LOGIN_POST_FAILURE,
      });
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setErrors({
      username: "",
      password: "",
      submissionError: "",
    });
    try {
      const { email, password, remember } = formValues;
      const { user, error } = await login({ email, password, remember });
      if (!error) {
        await addUserToStore(user);
        return setFormValues({
          username: "",
          password: "",
        });
      }
      return setErrors({ ...errors, submissionError: error });
    } catch (err) {
      return setErrors({ ...errors, submissionError: err });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleClick}>
        <FormTitle>Welcome back</FormTitle>
        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          name="email"
          value={formValues.email}
          placeholder=""
          onChange={handleChanges}
        />
        <Label htmlFor="password">Password:</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formValues.password}
          placeholder=""
          onChange={handleChanges}
        />
        <Checkbox
          label="Remember me"
          id="rememberMe"
          name="rememberMe"
          checked={formValues.remember}
          value={formValues.remember}
          onChange={() =>
            setFormValues({ ...formValues, remember: !formValues.remember })
          }
        />
        <Button type="submit">Log In</Button>
        <TransparentButton
          type="button"
          onClick={() => {
            dispatch({ type: LOGIN_MODAL_CLOSE });
            dispatch({ type: SIGNUP_MODAL_OPEN });
          }}
        >
          I don&apos;t have an account
        </TransparentButton>
      </Form>
    </Container>
  );
};

export default LoginForm;
