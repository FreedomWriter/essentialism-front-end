import React from "react";
import { useHistory } from "react-router";

import AboutValuesBannerWrapper, {
  AboutValuesHero,
  AboutButton
} from "./AboutValues.styles";

import hero from "../../../images/hero.JPG";
import AboutValuesCard from "../cards/AboutValuesCard.component";

function About() {
  const history = useHistory();
  return (
    <>
      <AboutValuesHero img={hero}>
        <AboutValuesBannerWrapper />
      </AboutValuesHero>

      <AboutValuesCard />
      <AboutButton onClick={() => history.push("/values-selection")}>
        begin
      </AboutButton>
    </>
  );
}

export default About;
