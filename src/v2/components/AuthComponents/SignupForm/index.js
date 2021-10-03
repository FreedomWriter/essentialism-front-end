import { useState } from "react";
import { useDispatch } from "react-redux";

import { Form, Input, Label, FormTitle } from "v2";

import { register } from "v2/api";
import { LoginLinkSignUp } from "./styled";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    verifyPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    submissionError: "",
  });

  const [isDisabled] = useState();
  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.verifyPassword) {
      setErrors({ ...errors, password: "Passwords do not match!!" });
    }
    try {
      const { email, password } = formValues;
      const { error } = await register({ email, password });
      if (!error) {
        setFormValues({
          email: "",
          password: "",
          verifyPassword: "",
        });
      } else {
        setErrors({ ...errors, submissionError: error });
      }
    } catch (err) {
      setErrors({ ...errors, submissionError: err });
    }
  };

  return (
    <>
      <Form onSubmit={handleClick}>
        <FormTitle>get started now</FormTitle>
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
        <button type="submit" disabled={isDisabled}>
          Sign Up
        </button>
        <LoginLinkSignUp to="/login">I already have an account</LoginLinkSignUp>
      </Form>
    </>
  );
};

export default SignUpForm;
