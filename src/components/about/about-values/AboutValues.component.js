import React from "react";
import { useHistory } from "react-router";

import StyledBannerWrapper, { AboutHero } from "../BannerWrapper";

import AboutValuesBannerWrapper, { AboutButton } from "./AboutValues.styles";

import hero from "../../../images/hero.JPG";
import AboutValuesCard from "../cards/AboutValuesCard.component";

function About() {
  const history = useHistory();
  return (
    <StyledBannerWrapper>
      <AboutHero img={hero}>
        <AboutValuesBannerWrapper />
      </AboutHero>

      <AboutValuesCard />
      <AboutButton onClick={() => history.push("/values-selection")}>
        begin
      </AboutButton>
    </StyledBannerWrapper>
  );
}

export default About;
