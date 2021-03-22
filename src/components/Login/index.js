import React, {
  useState,
  // useEffect
} from "react";
import {
  useHistory,
  //  Link
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { postLogin } from "../../store/actions/login.actions";
import { getUser } from "../../store/actions/user.actions";
import { getUserValues } from "../../store/actions/user-values.actions";
import { getUserProjects } from "../../store/actions/projects.actions";

import { LoginLinkSignUp, H1 } from "./styled";
import { Form, Input, Label } from "../../ui/custom-forms";

import { Container } from "./styled";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  // const [errors, setErrors] = useState({
  //   username: "",
  //   password: "",
  // });

  const [isDisabled] = useState();

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

  return (
    <Container>
      <Form onSubmit={handleClick}>
        <H1>Welcome back</H1>
        <Label htmlFor="username">Username:</Label>
        <Input
          id="username"
          name="username"
          value={formValues.username}
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
        <div>
          <button type="submit" disabled={isDisabled}>
            Log In
          </button>
        </div>
        <LoginLinkSignUp to="/up">I don't have an account</LoginLinkSignUp>
      </Form>
    </Container>
  );
};

export default LoginForm;
