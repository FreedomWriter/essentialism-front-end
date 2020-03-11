import React from "react";
import { Redirect } from "react-router-dom";

import {
  StyledSection,
  StyledConfirmedValues,
  StyledProjectList
} from "./HomePage.styles";

function HomePage() {
  const localUserValues = JSON.parse(localStorage.getItem("userValues"));
  const confirmed = JSON.parse(localStorage.getItem("explanations-confirmed"));

  if (confirmed) {
    if (localUserValues) {
      return (
        <StyledSection>
          <StyledConfirmedValues /> <StyledProjectList />
        </StyledSection>
      );
    } else return <Redirect to="/about-projects" />;
  } else {
    return <Redirect to="/about-values" />;
  }
}

export default HomePage;
