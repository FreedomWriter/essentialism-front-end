import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { postRegister } from "../../store/actions/login.actions";

const SignUpForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    verifyPassword: "",
  });

  const [errors] = useState({
    username: "",
    password: "",
    verifyPassword: "",
  });

  const [buttonDisabled] = useState(true);

  function handleChanges(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
  const handleClick = async (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.verifyPassword) {
      throw alert("Passwords do not match!!");
    }
    try {
      await dispatch(
        postRegister({
          username: formValues.username,
          password: formValues.password,
        })
      );
      await setFormValues({
        username: "",
        password: "",
        verifyPassword: "",
      });
      history.push("/about-values");
    } catch (err) {
      console.log(err);
    }
  };

  function btnDisable() {
    console.log(Object.values(errors));
  }
  btnDisable();

  return (
    <form onSubmit={handleClick}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        name="username"
        value={formValues.username}
        placeholder="What would you like to be called?"
        onChange={handleChanges}
      />
      {formValues.username.length > 1 ? (
        <p className="error">Username must be at least 2 characters</p>
      ) : null}
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        value={formValues.password}
        placeholder="8 characters minimum"
        onChange={handleChanges}
      />
      <label htmlFor="verifyPassword">Verify Password:</label>
      <input
        id="verifyPassword"
        name="verifyPassword"
        type="password"
        value={formValues.verifyPassword}
        placeholder="retype password"
        onChange={handleChanges}
      />
      <div>
        <button type="submit" disabled={buttonDisabled}>
          SignUp
        </button>
      </div>
      <Link to="/in">I already have an account</Link>
    </form>
  );
};

export default SignUpForm;
