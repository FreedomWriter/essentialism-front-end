import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import LoadingSpinner from "../../ui/LoadingSpinner.component";
import { Hero, BottomImg } from "./EditValues.styles";

import hero from "../../images/hero.jpeg";
import stones from "../../images/stones.jpeg";

import EditValuesForm from "../../edit-forms/edit-values/edit-vales-form/EditValuesForm.component";

function EditValuesPage() {
  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Hero img={hero} />
      <BottomImg img={stones}>
        <Route path="/edit-values/:valToEdit">
          <EditValuesForm />
        </Route>
      </BottomImg>
    </>
  );
}

export default EditValuesPage;
