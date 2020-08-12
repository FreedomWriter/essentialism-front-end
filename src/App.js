import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
// import Loader from "react-loader";

import PrivateRoute from "./utils/PrivateRoute";

import Header from "./components/header/Header.component";
import SignInAndUpPage from "./pages/sign-in-and-up/SignInAndUpPage";
import HomePage from "./pages/homepage/HomePage.page";
import AboutValues from "./components/about/about-values/AboutValues.component";
import AboutProjects from "./components/about/about-projects/AboutProjects.component";
import ChoiceExplanationForm from "./components/choice-explanation/ChoiceExplanationForm.component";
import EditValuesForm from "./components/edit-forms/edit-values/edit-vales-form/EditValuesForm.component";
import ProjectForm from "./components/project-form/ProjectForm.component";
import EditProfile from "./components/edit-forms/EditProfile.component";
import ValuesSelectionConfirmation from "./components/values-selection-reflect/ValuesReflection.component";

import { Globals } from "./globals/GlobalStyles";

import "./App.css";
import EditProjectsForm from "./components/edit-forms/edit-projects/EditProjectsForm.component";
import ValuesList from "./components/values-list/ValuesList.component";
import UsersTopValues from "./components/user-top-values/UsersTopValues.component";
import Tasks from "./components/tasks/Tasks.component";
function App() {
  const loggedIn = useSelector((state) => state.login.loggedIn);

  return (
    <Router>
      <Globals />
      {loggedIn ? <Header /> : <SignInAndUpPage />}
      <Switch>
        <PrivateRoute path="/choice-expl" component={ChoiceExplanationForm} />
        <PrivateRoute path="/project-form" component={ProjectForm} />
        <PrivateRoute path="/values-selection" component={ValuesList} />
        <PrivateRoute path="/values-confirmation" component={UsersTopValues} />
        <PrivateRoute path="/reflect" component={ValuesSelectionConfirmation} />
        <PrivateRoute path="/edit-profile" component={EditProfile} />
        <PrivateRoute path="/edit-values" component={EditValuesForm} />
        <PrivateRoute path="/edit-projects" component={EditProjectsForm} />
        <PrivateRoute path="/:project_id/tasks" component={Tasks} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/about-values" component={AboutValues} />
        <PrivateRoute path="/about-projects" component={AboutProjects} />
      </Switch>
    </Router>
  );
}

export default App;
