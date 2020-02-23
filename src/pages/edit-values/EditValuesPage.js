import React from "react";
import { Route } from "react-router-dom";
import EditValuesForm from "../../components/edit-forms/edit-values/edit-vales-form/EditValuesForm.component";
import ValuesToEdit from "../../components/values-components/values-to-edit/ValuesToEdit";

import hero from "../../images/hero.JPG";
import stones from "../../images/stones.jpeg";

import { Hero, BottomImg } from "./EditValuesPage.styles";

function EditValuesPage() {
  return (
    <>
      <Hero img={hero}></Hero>
      <ValuesToEdit />
      <BottomImg img={stones}>
        <Route path="/edit-values/:valToEdit">
          <EditValuesForm />
        </Route>
      </BottomImg>
    </>
  );
}

export default EditValuesPage;
