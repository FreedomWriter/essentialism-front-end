import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from "./utils/PrivateRoute";

import SignInAndUpPage from "./pages/sign-in-and-up";
import Header from "./components/NavBar";
import AboutValues from "./pages/AboutValuesPage";
import EnterValues from "./pages/EnterValuesPage";
import AboutProjects from "./pages/AboutProjectsPage";
import EditProjectsPage from "./pages/EditProjectsPage";
import HomePage from "./pages/homepage/HomePage.page";

// These components should be rendered in the page view, only pages here in app
import EditValuesForm from "./components/EditValues";
import UsersTopValues from "./components/ValueSelection";
import Tasks from "./components/Tasks";
import ChoiceExplanationForm from "./components/ChoiceExplanation";
import ProjectForm from "./components/ProjectForm";
import EditProfile from "./components/EditForms";
import ValuesSelectionConfirmation from "./components/ValuesReflection";

import { Globals } from "./ui/globals/GlobalStyles";
import LoadingSpinner from "./ui/LoadingSpinner.component";

// import "./App.css";

function ComingSoon() {
  return <h1>Under construction but coming soon</h1>;
}

function App() {
  const loggedIn = useSelector((state) => state.login.loggedIn);

  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <Globals />
      {/* If the user is not logged in, they only have access to the SignInAndUpPage,
          otherwise, they can't access that, but get the app */}
      {!loggedIn ? (
        <SignInAndUpPage />
      ) : (
        <>
          {" "}
          <Header />
          <Switch>
            <PrivateRoute path="/about-values" component={AboutValues} />
            <PrivateRoute path="/enter-values" component={EnterValues} />
            <PrivateRoute
              path="/choice-expl"
              component={ChoiceExplanationForm}
            />
            <PrivateRoute path="/project-form" component={ProjectForm} />
            <PrivateRoute
              path="/values-confirmation"
              component={UsersTopValues}
            />
            <PrivateRoute
              path="/reflect"
              component={ValuesSelectionConfirmation}
            />
            <PrivateRoute path="/edit-profile" component={EditProfile} />
            <PrivateRoute path="/edit-values" component={EditValuesForm} />
            <PrivateRoute path="/edit-projects" component={EditProjectsPage} />
            <PrivateRoute path="/:project_id/tasks" component={Tasks} />
            <PrivateRoute path="/home" component={HomePage} />
            <PrivateRoute path="/about-projects" component={AboutProjects} />
            <PrivateRoute path="/edit-tasks" component={ComingSoon} />
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
