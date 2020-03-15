import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  StyledSection,
  StyledConfirmedValues,
  StyledProjectList
} from "./HomePage.styles";

function HomePage() {
  const userValues = useSelector(state => state.userValues.userValues);
  const confirmed = JSON.parse(localStorage.getItem("explanations-confirmed"));

  if (confirmed) {
    if (userValues) {
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
