import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Globals } from "./ui/globals/GlobalStyles";

import "./App.css";
//v2 imports
import { LandingPage, HomePage, Navigation } from "v2";

function ComingSoon() {
  return <h1>Under construction but coming soon</h1>;
}

function App() {
  netlifyIdentity.on("init", (user) => {
    console.log("init", user);
  });
  // Available after on('init') is invoked
  const user = netlifyIdentity.currentUser();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);
  console.log({ isAuthenticated });
  return (
    <Router>
      <Globals />
      <Navigation />
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
