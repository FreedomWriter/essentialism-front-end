import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginForm from "../../components/login-form/LoginForm.component";
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";

import Hero, { BottomImg } from "../../components/hero/Hero.component";
import hero from "../../images/hero.JPG";
import stones from "../../images/stones.jpeg";
import Banner from "../../components/banner/Banner.component";
import { setColor } from "../../globals/styles";
import Loader from "react-loader-spinner";

function SignInAndUpPage() {
  const isLoading = useSelector((state) => state.login.isLoading);
  if (isLoading) {
    // console.log(isLoading);
    return (
      // <LoaderCenter>
      <Loader
        type="TailSpin"
        color={setColor.mainColor}
        width="100%"
        height="60vh"
        timeout={3000} //3 secs
      />
      // </LoaderCenter>
    );
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
