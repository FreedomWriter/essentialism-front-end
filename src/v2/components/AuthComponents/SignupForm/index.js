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
} from "v2";

import { register } from "v2/api";

import { LOGIN_MODAL_OPEN, SIGNUP_MODAL_CLOSE } from "v2/utils";

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
  const handleClick = async (e) => {
    setErrors(null);
    e.preventDefault();
    if (formValues.password !== formValues.verifyPassword) {
      setErrors("Passwords do not match!!");
    }
    const { email, password } = formValues;
    await register({ email, password });

    // TODO: log user in after registering
  };

  return (
    <Container>
      {errors && <p>{errors}</p>}
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
        <Label htmlFor="verifyPassword">Verify Password:</Label>
        <Input
          id="verifyPassword"
          name="verifyPassword"
          type="password"
          value={formValues.verifyPassword}
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
