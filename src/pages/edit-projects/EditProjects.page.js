import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import EditProjectsForm from "../../components/EditProjects";
import ProjectToEdit from "../../components/project-to-edit/ProjectToEdit.component";

import hero from "../../images/hero.JPG";

import { Hero, BottomImg } from "./EditProjects.styles";

import stones from "../../images/stones.jpeg";
import LoadingSpinner from "../../ui/LoadingSpinner.component";

function EditProjectsPage() {
  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <Hero img={hero}></Hero>
      <ProjectToEdit />
      <BottomImg img={stones}>
        <Route path="/edit-projects/:projToEdit">
          <EditProjectsForm />
        </Route>
      </BottomImg>
    </>
  );
}

export default EditProjectsPage;
