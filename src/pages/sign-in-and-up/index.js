import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginForm from "../../components/Login";
import SignUpForm from "../../components/Signup";

import LoadingSpinner from "../../ui/LoadingSpinner.component";

function SignInAndUpPage() {
  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Switch>
        <Route path="/">
          <LoginForm />
        </Route>
        <Route path="/">
          <SignUpForm />
        </Route>
      </Switch>
    </div>
  );
}

export default SignInAndUpPage;
