import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  Form,
  FormTitle,
  TransparentButton,
  Checkbox,
  Error,
  InputGroup,
  A11ySubmitButton,
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
  const [isDisabled, setIsDisabled] = useState(true);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    verifyPassword: "",
    remember: false,
  });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    verifyPassword: null,
    submission: null,
  });

  const [a11yMessaging, setA11yMessaging] = useState({
    reason: "",
    isLoading: false,
  });

  useEffect(() => {
    if (
      formValues.email &&
      !errors.email &&
      formValues.password &&
      !errors.password &&
      formValues.verifyPassword &&
      !errors.verifyPassword
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [
    formValues.email,
    errors.email,
    formValues.password,
    errors.password,
    formValues.verifyPassword,
    errors.verifyPassword,
  ]);

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
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
    setErrors({ ...errors, submission: null });
    setA11yMessaging({ reason: "loading", isLoading: true });
    e.preventDefault();
    const { email, password, remember } = formValues;
    const { error } = await register({ email, password, remember });

    if (!error) {
      const { user, error: loginError } = await login({
        email,
        password,
        remember,
      });
      if (!loginError) {
        setA11yMessaging({ reason: null, isLoading: false });
        return addUserToStore(user);
      }
      return setErrors({ ...errors, submission: loginError });
    }

    setA11yMessaging({ reason: null, isLoading: false });
    return setErrors({ ...errors, submission: error });
  };

  const validatePassword = () => {
    let errorMessage = null;
    if (!formValues.password) {
      errorMessage = "Password is required";
    }

    if (errorMessage) {
      if (!a11yMessaging.reason.includes(errorMessage)) {
        setA11yMessaging({
          reason: `${a11yMessaging.reason} ${errorMessage}`,
          isLoading: false,
        });
      }
    } else {
      setA11yMessaging({
        reason: a11yMessaging.reason.replace("Password is required", ""),
      });
    }

    return setErrors({ ...errors, password: errorMessage });
  };

  const stripString = ({ str, subStr }) => {
    let result = str;
    if (str.length > 0) {
      if (str.includes(subStr)) {
        result = str.replace(subStr, "");
      }
    }

    return result.trim();
  };
  const validatePasswordVerification = () => {
    let errorMessage = null;

    const stripVerify = stripString({
      str: a11yMessaging.reason,
      subStr: "Please verify password",
    });
    const freshErr = stripString({
      str: stripVerify,
      subStr: "Passwords do not match",
    });

    if (!formValues.verifyPassword) {
      errorMessage = "Please verify password";
    }

    if (
      formValues.verifyPassword &&
      formValues.password !== formValues.verifyPassword
    ) {
      errorMessage = "Passwords do not match";
    }

    if (errorMessage) {
      setA11yMessaging({
        reason: `${freshErr} ${errorMessage}`,
        isLoading: false,
      });
    } else {
      setA11yMessaging({ reason: freshErr, isLoading: false });
    }
    return setErrors({ ...errors, verifyPassword: errorMessage });
  };

  const validateEmail = () => {
    let errorMessage = null;
    const isValid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      !formValues.email ||
      !isValid.test(String(formValues.email).toLowerCase())
    ) {
      errorMessage = "Please enter a valid email";
    }

    if (errorMessage) {
      if (!a11yMessaging.reason.includes(errorMessage)) {
        setA11yMessaging({
          reason: `${a11yMessaging.reason} ${errorMessage}`,
          isLoading: false,
        });
      }
    } else {
      setA11yMessaging({
        reason: a11yMessaging.reason.replace("Please enter a valid email", ""),
        isLoading: false,
      });
    }
    return setErrors({ ...errors, email: errorMessage });
  };

  return (
    <Container>
      <Form onSubmit={handleClick}>
        <FormTitle>Sign up</FormTitle>
        {errors.submission && <Error>{errors.submission}</Error>}
        <InputGroup
          label="Email:"
          id="email"
          name="email"
          type="email"
          value={formValues.email}
          placeholder=""
          onChange={handleChanges}
          onBlur={validateEmail}
          error={errors.email}
        />
        <InputGroup
          label="Password:"
          id="password"
          name="password"
          type="password"
          value={formValues.password}
          placeholder=""
          onChange={handleChanges}
          onBlur={validatePassword}
          error={errors.password}
        />
        <InputGroup
          label="Verify Password:"
          id="verifyPassword"
          name="verifyPassword"
          type="password"
          value={formValues.verifyPassword}
          placeholder=""
          onChange={handleChanges}
          onBlur={validatePasswordVerification}
          error={errors.verifyPassword}
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
        <A11ySubmitButton
          reason={a11yMessaging.reason}
          isLoading={a11yMessaging.isLoading}
          isDisabled={isDisabled}
        >
          Sign Up
        </A11ySubmitButton>
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
