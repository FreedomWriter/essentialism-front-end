import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { postLogin } from "../../store/actions/login.actions";
import { getUser } from "../../store/actions/user.actions";
import { getUserValues } from "../../store/actions/user-values.actions";
import { getUserProjects } from "../../store/actions/projects.actions";
import Loader from "react-loader";

import { LoginButton, LoginLinkSignUp } from "./LoginForm.styles";
import { SignUpButtonContainer } from "../sign-up-form/SignUpForm.styles";

const LoginForm = ({ errors, touched, isSubmitting, values }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.login.isLoading);
  const handleClick = async () => {
    try {
      const login = await dispatch(postLogin(values));
      await dispatch(getUser(login.payload.user.id));
      await dispatch(getUserValues(login.payload.user.id));
      //user_value_id is required for route, but not used to look up projects
      await dispatch(
        getUserProjects({ user_id: login.payload.user.id, user_value_id: 1 })
      );

      return history.push("/home");
    } catch (err) {
      return alert(err);
    }
  };

  if (loading) {
    return <Loader loaded={loading} />;
  }

  return (
    <div className="form-container">
      <Form className="form">
        <h4>Welcome back</h4>
        <Field
          className="input"
          component="input"
          type="text"
          name="username"
          placeholder="username"
        />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}
        <Field
          className="input"
          component="input"
          type="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <SignUpButtonContainer>
          <LoginButton
            type="submit"
            onClick={handleClick}
            disabled={isSubmitting}
          >
            Log In
          </LoginButton>
          <LoginLinkSignUp to="/up" disabled={isSubmitting}>
            Sign Up
          </LoginLinkSignUp>
        </SignUpButtonContainer>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ password, username }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(5, "Password must be 5 characters or longer")
      .required("Required")
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
  }
})(LoginForm);
