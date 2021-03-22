import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import AboutProjectsBanner, { AboutButton } from "./AboutProjects.styles";

import AboutProjectCard from "../../components/cards/AboutProjects";
import LoadingSpinner from "../../ui/LoadingSpinner.component";

function AboutProjects() {
  const history = useHistory();
  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }
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
