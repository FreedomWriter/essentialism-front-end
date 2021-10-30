import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { LandingPage, HomePage, Navigation } from "v2";
import { Globals } from "v2/utils";
import {Header} from "./App.styled"



function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Globals />
      <Header>
      <Navigation />
      </Header>
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
    </>
  );
}

export default App;
