import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LandingPage, HomePage, Navigation } from "v2";
import { getUser } from "v2/api";
import { Globals } from "v2/utils";

import "./App.css";

function App() {
  const { user } = getUser();

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
