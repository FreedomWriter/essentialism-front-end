import React from "react";
import { Route } from "react-router-dom";
import EditValuesForm from "../../edit-forms/edit-values/edit-vales-form/EditValuesForm.component";

import hero from "../../images/hero.jpeg";
import stones from "../../images/stones.jpeg";

import { Hero, BottomImg } from "./EditValuesPage.styles";

function EditValuesPage() {
  return (
    <>
      <Hero img={hero}></Hero>
      <BottomImg img={stones}>
        <Route path="/edit-values/:valToEdit">
          <EditValuesForm />
        </Route>
      </BottomImg>
    </>
  );
}

export default EditValuesPage;
