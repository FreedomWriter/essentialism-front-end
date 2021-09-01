import React from "react";
import {
  Route,
  // Switch
} from "react-router-dom";
import { useSelector } from "react-redux";
import { NavBar } from "ui";

import { Login, Signup } from "components";

import LoadingSpinner from "ui/LoadingSpinner.component";

function AuthenticateUserPage() {
  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <NavBar />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </>
  );
}

export default AuthenticateUserPage;
