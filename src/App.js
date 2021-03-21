import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from "./utils/PrivateRoute";

import SignInAndUpPage from "./pages/sign-in-and-up/SignInAndUp.page";
import Header from "./components/header/Header.component";
import AboutValues from "./pages/about-values/AboutValues.page";
import EnterValues from "./pages/enter-values/EnterValues.page";
import AboutProjects from "./pages/about-projects/AboutProjects.page";
import EditProjectsPage from "./pages/edit-projects/EditProjects.page";
import HomePage from "./pages/homepage/HomePage.page";

// These components should be rendered in the page view, only pages here in app
import EditValuesForm from "./components/edit-vales-form/EditValuesForm.component";
import UsersTopValues from "./components/user-top-values/UsersTopValues.component";
import Tasks from "./components/tasks/Tasks.component";
import ChoiceExplanationForm from "./components/choice-explanation/ChoiceExplanationForm.component";
import ProjectForm from "./components/project-form/ProjectForm.component";
import EditProfile from "./components/edit-forms/EditProfile.component";
import ValuesSelectionConfirmation from "./components/values-selection-reflect/ValuesReflection.component";

import { Globals } from "./ui/globals/GlobalStyles";
import LoadingSpinner from "./ui/LoadingSpinner.component";

import "./App.css";

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
