import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import ProjectList from "../../components/project-list/ProjectList.component";
import ConfirmedTopValues from "../../components/confirmed-values/Confirmed-Values.component";

import { StyledHero, StyledBottomImg } from "./HomePage.styles";

import path from "../../images/stone-garden.jpg";

function HomePage({ className }) {
  const userValues = useSelector(state => state.userValues.userValues);
  const projects = useSelector(state => state.projects.projects);

  return (
    <>
      <StyledHero img={path}>
        <ConfirmedTopValues />
      </StyledHero>
      <StyledBottomImg img={path}>
        <ProjectList />
      </StyledBottomImg>
    </>
  );
}

export default HomePage;
