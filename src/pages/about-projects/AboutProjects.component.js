import React from "react";
import { useHistory } from "react-router";

import AboutProjectsBanner, { AboutButton } from "./AboutProjects.styles";

import AboutProjectCard from "../../components/cards/AboutProjectsCard.component";

function AboutProjects() {
  const history = useHistory();
  return (
    <>
      <AboutProjectsBanner />
      <AboutProjectCard />
      <AboutButton onClick={() => history.push("/project-form")}>
        continue
      </AboutButton>
    </>
  );
}

export default AboutProjects;
