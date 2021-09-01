import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthenticateUserPage from "./pages/AuthenticateUserPage";
import AuthenticatedApp from "./AuthenticatedApp";

import { Globals } from "./ui/globals/GlobalStyles";
import LoadingSpinner from "./ui/LoadingSpinner.component";

function App() {
  const loggedIn = useSelector((state) => state.login.loggedIn);

  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  console.log(loggedIn);

  return (
    <Router>
      <Globals />
      {/* If the user is not logged in, they only have access to the AuthenticateUserPage,
          otherwise, they can't access that, but get the app */}
      {loggedIn ? <AuthenticatedApp /> : <AuthenticateUserPage />}
    </Router>
  );
}

export default App;
