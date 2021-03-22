import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import EditProjectsForm from "../../components/EditProjects";
import ProjectToEdit from "../../components/EditProject";

import LoadingSpinner from "../../ui/LoadingSpinner.component";

function EditProjectsPage() {
  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <ProjectToEdit />
      <Route path="/edit-projects/:projToEdit">
        <EditProjectsForm />
      </Route>
    </>
  );
}

export default EditProjectsPage;
