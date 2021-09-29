// const SignUpForm = () => {
//   const history = useHistory();
//   const dispatch = useDispatch();

//   const [buttonDisabled] = useState(false);

//   return (
//     <FakeContainer>
//       <form onSubmit={handleClick}>
// <label htmlFor="username">Username:</label>
// <input
//   id="username"
//   name="username"
//   value={formValues.username}
//   placeholder="What would you like to be called?"
//   onChange={handleChanges}
// />
// <label htmlFor="password">Password:</label>
// <input
//   id="password"
//   name="password"
//   type="password"
//   value={formValues.password}
//   placeholder="8 characters minimum"
//   onChange={handleChanges}
// />
// <label htmlFor="verifyPassword">Verify Password:</label>
// <input
//   id="verifyPassword"
//   name="verifyPassword"
//   type="password"
//   value={formValues.verifyPassword}
//   placeholder="retype password"
//   onChange={handleChanges}
// />
//         <div>
//           <button type="submit" disabled={buttonDisabled}>
//             SignUp
//           </button>
//         </div>
//         <Link to="/login">I already have an account</Link>
//       </form>
//     </FakeContainer>
//   );
// };

// export default SignUpForm;
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Form,
  Input,
  Label,
  FormContainer,
  FormTitle,
} from "../../ui/custom-forms";

import { postRegister } from "../../store/actions/login.actions";

import { LoginLinkSignUp } from "./styled";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    verifyPassword: "",
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

  return (
    <FormContainer>
      <Form onSubmit={handleClick}>
        <FormTitle>Welcome back</FormTitle>
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
        <Label htmlFor="verifyPassword">Verify Password:</Label>
        <Input
          id="verifyPassword"
          name="verifyPassword"
          type="verifyPassword"
          value={formValues.verifyPassword}
          placeholder=""
          onChange={handleChanges}
        />
        <button type="submit" disabled={isDisabled}>
          Sign Up
        </button>
        <LoginLinkSignUp to="/login">I already have an account</LoginLinkSignUp>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
