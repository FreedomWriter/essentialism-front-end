import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import LoadingSpinner from "../../ui/LoadingSpinner.component";

import EditValuesForm from "../../edit-forms/edit-values/edit-vales-form/EditValuesForm.component";

function EditValuesPage() {
  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Route path="/edit-values/:valToEdit">
        <EditValuesForm />
      </Route>
    </>
  );
}

export default EditValuesPage;
