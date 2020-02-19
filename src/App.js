import React from "react";
import "./App.css";
import { postLogin } from "./store/actions/login.actions";

import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  dispatch(postLogin({ username: "myUser", password: "password" }));
  return (
    <div className="App">
      <header className="App-header">Hello from app</header>
    </div>
  );
}

export default App;
