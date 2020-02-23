import React from "react";
import { Route } from "react-router-dom";

import { ValuesSelectionHero } from "./ValuesSelectionPage.styles";
import hero from "../../images/hero.JPG";
import ValuesList from "../../components/values-components/values-list/ValuesList.component";
// import ValuesSelection from "../../components/values-components/v";

function ValuesSelectionPage() {
  return (
    <>
      <ValuesSelectionHero img={hero} />
      {/* <ValuesSelection /> */}
      {/* <Route to="/about-values/values-selection">
        <ValuesList />
      </Route> */}
    </>
  );
}

export default ValuesSelectionPage;
