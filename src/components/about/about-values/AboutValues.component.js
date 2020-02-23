import React from "react";
import { useHistory } from "react-router";

import AboutValuesBannerWrapper, {
  AboutValuesHero,
  AboutButton,
  BottomImg
} from "./AboutValues.styles";

import hero from "../../../images/hero.JPG";
import stones from "../../../images/stones.jpeg";
import AboutValuesCard from "../cards/AboutValuesCard.component";

function About() {
  const history = useHistory();
  return (
    <>
      <AboutValuesHero img={hero}>
        <AboutValuesBannerWrapper />
      </AboutValuesHero>

      <BottomImg img={stones}>
        <AboutValuesCard />
        <AboutButton onClick={() => history.push("/values-selection")}>
          begin
        </AboutButton>
      </BottomImg>
    </>
  );
}

export default About;
