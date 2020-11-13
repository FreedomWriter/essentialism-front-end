import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
// import Loader from "react-loader";

import PrivateRoute from "./utils/PrivateRoute";

import Header from "./components/header/Header.component";
import AboutValues from "./pages/about-values/AboutValues.page";
import AboutProjects from "./pages/about-projects/AboutProjects.page";
import ChoiceExplanationForm from "./components/choice-explanation/ChoiceExplanationForm.component";
import ProjectForm from "./components/project-form/ProjectForm.component";
import EditProfile from "./components/edit-forms/EditProfile.component";
import ValuesSelectionConfirmation from "./components/values-selection-reflect/ValuesReflection.component";

import { Globals } from "./ui/globals/GlobalStyles";

import "./App.css";
import SignInAndUpPage from "./pages/sign-in-and-up/SignInAndUp.page";
import HomePage from "./pages/homepage/HomePage.page";
import EditProjectsForm from "./pages/edit-projects/EditProjects.page";
import EditValuesForm from "./components/edit-vales-form/EditValuesForm.component";
import EnterValues from "./pages/enter-values/EnterValues.page";
import UsersTopValues from "./components/user-top-values/UsersTopValues.component";
import Tasks from "./components/tasks/Tasks.component";
import LoadingSpinner from "./ui/LoadingSpinner.component";

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
      {loggedIn ? <Header /> : <SignInAndUpPage />}
      <Switch>
        <PrivateRoute path="/about-values" component={AboutValues} />
        <PrivateRoute path="/enter-values" component={EnterValues} />
        <PrivateRoute path="/choice-expl" component={ChoiceExplanationForm} />
        <PrivateRoute path="/project-form" component={ProjectForm} />
        <PrivateRoute path="/values-confirmation" component={UsersTopValues} />
        <PrivateRoute path="/reflect" component={ValuesSelectionConfirmation} />
        <PrivateRoute path="/edit-profile" component={EditProfile} />
        <PrivateRoute path="/edit-values" component={EditValuesForm} />
        <PrivateRoute path="/edit-projects" component={EditProjectsForm} />
        <PrivateRoute path="/:project_id/tasks" component={Tasks} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/about-projects" component={AboutProjects} />
        <PrivateRoute path="/edit-tasks" component={ComingSoon} />
      </Switch>
    </Router>
  );
}

export default App;
