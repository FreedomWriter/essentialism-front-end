import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginForm from "../../components/login-form/LoginForm.component";
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";

import Hero, { BottomImg } from "../../components/hero/Hero.component";
import hero from "../../images/hero.JPG";
import stones from "../../images/stones.jpeg";
import Banner from "../../components/banner/Banner.component";
import LoadingSpinner from "../../ui/LoadingSpinner.component";

function SignInAndUpPage() {
  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Hero img={hero}>
        <Switch>
          <Route path="/in">
            <LoginForm />
          </Route>
          <Route path="/up">
            <SignUpForm />
          </Route>
          <Route path="/">
            <Banner />
          </Route>
        </Switch>
      </Hero>
      <BottomImg img={stones} />
    </div>
  );
}

export default SignInAndUpPage;
