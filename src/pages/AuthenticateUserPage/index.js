import React from "react";
import {
  Route,
  // Switch
} from "react-router-dom";
import { useSelector } from "react-redux";

import { Login, Signup } from "components";

import LoadingSpinner from "../../ui/LoadingSpinner.component";

function SignInAndUpPage() {
  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {/* <Switch> */}
      <Route path="/">
        <Login />
      </Route>
      <Route path="/">
        <Signup />
      </Route>
      {/* </Switch> */}
    </div>
  );
}

export default SignInAndUpPage;
