import React from "react";
import "./App.css";

import { postLogin, postRegister } from "./store/actions/login.actions";
import { getProjectById } from "./store/actions/projects.actions";
import { getValues } from "./store/actions/values.actions";
import { getUserValues } from "./store/actions/user-values.actions";
import { getZen } from "./store/actions/zen.quotes.actions";

import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  const test = async () => {
    try {
      await dispatch(postLogin({ username: "myUser", password: "password" }));
      // dispatch(postRegister({ username: "newerestUser", password: "password" }));
      dispatch(getProjectById(2));
      dispatch(getValues());
      dispatch(getUserValues(1));
      dispatch(getZen());
    } catch (err) {
      console.log(err);
    }
  };
  test();
  return (
    <div className="App">
      <header className="App-header">Hello from app</header>
    </div>
  );
}

export default App;
