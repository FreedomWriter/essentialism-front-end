import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import {
  SignUpButton,
  SignUpButtonContainer
} from "../sign-up-form/SignUpForm.styles";

import { StyledForm, StyledFormContainer } from "./EditProfile.styles";

import { putUser, deleteUser } from "../../store/actions/user.actions";

import "../../globals/form.styles.css";

const EditProfile = ({
  errors,
  touched,
  isSubmitting,
  isValidating,
  values
}) => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);

  const id = JSON.parse(Number(localStorage.getItem("id")));
  useEffect(() => {}, []);

  const handleUpdate = () => {
    dispatch(
      putUser(
        {
          name: values.name || user.name,
          username: values.username || user.username,
          email: values.email || user.email
        },
        id
      )
    );
  };

  const handleDelete = () => {
    dispatch(deleteUser(id));
    localStorage.clear();
  };

  return (
    <StyledFormContainer>
      <StyledForm>
        <label htmlFor="name">Name</label>
        <Field
          className="input"
          component="input"
          type="text"
          id="name"
          name="name"
          placeholder={user.name}
        />
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}

        <label htmlFor="email">Email</label>
        <Field
          className="input"
          component="input"
          type="email"
          name="email"
          placeholder={user.email}
        />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <label htmlFor="username">Username</label>
        <Field
          className="input"
          component="input"
          type="text"
          name="username"
          placeholder={user.username}
        />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}
        <label htmlFor="password">Password</label>
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
        <label htmlFor="verifyPassword" hidden>
          Verify Updated Password
        </label>
        {touched.password && (
          <Field
            className="input"
            component="input"
            type="password"
            name="verifyPassword"
            placeholder="Verify Updated Password"
          />
        )}
        {touched.verifyPassword && errors.verifyPassword && (
          <p className="errors">{errors.verifyPassword}</p>
        )}
        <SignUpButtonContainer>
          <SignUpButton
            type="submit"
            onClick={handleDelete}
            disabled={isSubmitting}
          >
            delete me
          </SignUpButton>
          <SignUpButton
            type="submit"
            onClick={handleUpdate}
            disabled={isSubmitting}
          >
            Update
          </SignUpButton>
        </SignUpButtonContainer>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default withFormik({
  mapPropsToValues({ name, email, password, verifyPassword, terms, username }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      verifyPassword: verifyPassword || "",
      terms: terms || false,
      username: username || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Please Enter A Valid Email"),
    password: Yup.string().min(5, "Password must be 8 characters or longer"),
    verifyPassword: Yup.string().min(
      5,
      "Password must be 8 characters or longer and should match"
    ),
    name: Yup.string(),
    username: Yup.string()
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.password !== values.verifyPassword) {
      setErrors({ verifyPassword: "Passwords do not match" });
      setSubmitting(false);
    } else {
      resetForm();
    }
  }
})(EditProfile);
