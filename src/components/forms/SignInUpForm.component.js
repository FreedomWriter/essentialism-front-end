import React from "react";
import { useFormState } from "react-use-form-state";
import { useDispatch } from "react-redux";

import { postLogin, postRegister } from "../../store/actions/login.actions";

function SignInUpForm() {
  const [formState, { label, text, username, password, radio }] = useFormState(
    {
      username: "",
      password: ""
    },
    {
      onChange(e, stateValues, nextStateValues) {
        const { name, value } = e.target;
        console.log(`the ${name} input has changed!`);
      }
    },
    {
      withIds: true // enable automatic creation of id and htmlFor props
    }
  );

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const { sign, username, password } = formState.values;
    if (sign === "signIn") {
      dispatch(postLogin({ username, password }));
    } else if (sign === "signUp") {
      dispatch(postRegister({ username, password }));

      return formState.reset;
    }
    console.log(formState.values);
    // const  clear =
  }

  return (
    <section className=" container">
      <form className="field" onSubmit={handleSubmit}>
        <label className="label" {...label("username")}>
          Username
        </label>
        <div className="control">
          <input {...text("username")} required />
        </div>
        <label className="label" {...label("password")}>
          Password
        </label>
        <div className="control">
          <input {...password("password")} required minLength="8" />
        </div>
        <div className="field">
          <label className="raddio" {...label("signIn")}>
            Sign In
          </label>
          <div className="control">
            <input className="radio" {...radio("sign", "signIn")} />
          </div>{" "}
          <label className="radio" {...label("signUp")}>
            Sign Up
          </label>
          <div className="control">
            <input className="radio" {...radio("sign", "signUp")} />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default SignInUpForm;
