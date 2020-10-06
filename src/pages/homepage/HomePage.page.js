import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import ProjectList from "../../components/project-list/ProjectList.component";
import ConfirmedTopValues from "../../components/confirmed-values/Confirmed-Values.component";

import { LoaderCenter } from "../../globals/LoaderCenter";
import { setColor } from "../../globals/styles";
import Loader from "react-loader-spinner";

import { StyledHero, StyledBottomImg } from "./HomePage.styles";

import path from "../../images/stone-garden.jpg";

function HomePage({ className }) {
  const userValues = useSelector((state) => state.userValues.userValues);
  const projects = useSelector((state) => state.projects.projects);
  const projectsLoading = useSelector((state) => state.projects.isLoading);
  const userValuesLoading = useSelector((state) => state.userValues.isLoading);

  if (projectsLoading || userValuesLoading) {
    return (
      <LoaderCenter>
        <Loader
          type="TailSpin"
          color={setColor.mainColor}
          height="100%"
          width="100%"
          timeout={3000}
        />
      </LoaderCenter>
    );
  }

  // {
  //   userValues && projects;
  // }
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
