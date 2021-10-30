import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { LandingPage, HomePage, Navigation, Footer } from "v2";
import { GlobalStyles } from "v2/utils";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div>
      <GlobalStyles />
      <Navigation />
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
      <Footer />
    </div>
  );
}

export default App;
