import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LandingPage, HomePage, Navigation, ModalHandler } from "v2";
import { Globals } from "v2/utils";

import "./App.css";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Router>
      <Globals />
      <Navigation />
      <ModalHandler />
      {!isAuthenticated ? (
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
