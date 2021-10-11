import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Form,
  Input,
  Label,
  FormTitle,
  TransparentButton,
  Button,
  Checkbox,
  Error,
  InputGroup,
} from "v2";

import { register, login } from "v2/api";

import {
  LOGIN_MODAL_OPEN,
  SIGNUP_MODAL_CLOSE,
  USER_GET_FAILURE,
  USER_GET_START,
  USER_GET_SUCCESS,
  LOGIN_POST_SUCCESS,
  LOGIN_POST_FAILURE,
} from "v2/utils";

import { Container } from "./styled";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    verifyPassword: "",
    remember: false,
  });
  const [errors, setErrors] = useState(null);

  const [isDisabled] = useState();
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
      await dispatch({ type: SIGNUP_MODAL_CLOSE });
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
    setErrors(null);
    e.preventDefault();
    if (formValues.password !== formValues.verifyPassword) {
      return setErrors("Passwords do not match!!");
    }
    const { email, password, remember } = formValues;
    const { error } = await register({ email, password, remember });

    if (!error) {
      const { user, error: loginError } = await login({
        email,
        password,
        remember,
      });
      if (!loginError) {
        return addUserToStore(user);
      }
    }
    return setErrors(error);
  };

  return (
    <Container>
      {errors && <Error>{errors}</Error>}
      <Form onSubmit={handleClick}>
        <FormTitle>Sign up</FormTitle>
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
        {/* <Label htmlFor="verifyPassword">Verify Password:</Label>
        <Input
          id="verifyPassword"
          name="verifyPassword"
          type="password"
          value={formValues.verifyPassword}
          placeholder=""
          onChange={handleChanges}
        /> */}
        <InputGroup
          label="Verify Password:"
          id="verifyPassword"
          name="verifyPassword"
          type="password"
          value={formValues.verifyPassword}
          placeholder=""
          onChange={handleChanges}
          onBlur={() => {}}
          error="validationError"
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
        <Button type="submit" disabled={isDisabled}>
          Sign Up
        </Button>
        <TransparentButton
          type="button"
          onClick={() => {
            dispatch({ type: SIGNUP_MODAL_CLOSE });
            dispatch({ type: LOGIN_MODAL_OPEN });
          }}
        >
          I already have an account
        </TransparentButton>
      </Form>
    </Container>
  );
};

export default SignUpForm;
