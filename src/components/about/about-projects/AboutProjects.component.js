import React from "react";
import { useHistory } from "react-router";

import AboutProjectsBanner, { AboutButton } from "./AboutProjects.styles";

import StyledBannerWrapper, { AboutHero } from "../BannerWrapper";

import hero from "../../../images/hero.JPG";
import AboutProjectCard from "../cards/AboutProjectsCard.component";

function AboutProjects() {
  const history = useHistory();
  return (
    <StyledBannerWrapper>
      <AboutHero img={hero}>
        <AboutProjectsBanner />
      </AboutHero>
      <AboutProjectCard />
      <AboutButton onClick={() => history.push("/project-form")}>
        continue
      </AboutButton>
    </StyledBannerWrapper>
  );
}

export default AboutProjects;
