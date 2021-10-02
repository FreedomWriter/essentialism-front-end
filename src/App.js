import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Globals } from "./ui/globals/GlobalStyles";

import "./App.css";
//v2 imports
import LandingPage from "v2/LandingPage";
import HomePage from "v2/authenticated-app/pages/HomePage";

function ComingSoon() {
  return <h1>Under construction but coming soon</h1>;
}

function App() {
  netlifyIdentity.on("init", (user) => {
    console.log("init", user);
  });
  // Available after on('init') is invoked
  const user = netlifyIdentity.currentUser();
  console.log({ user });
  return (
    <Router>
      <Globals />
      {/* If the user is not logged in, they only have access to the SignInAndUpPage,
          otherwise, they can't access that, but get the app */}
      {!user ? (
        <LandingPage />
      ) : (
        <>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
