import React from "react";
import { useHistory } from "react-router";

import AboutProjectsBannerWrapper, {
  AboutButton,
  AboutProjectsHero,
  BottomImg
} from "./AboutProjects.styles";

import hero from "../../../images/hero.JPG";
import stones from "../../../images/stones.jpeg";
import AboutProjectCard from "../cards/AboutProjectsCard.component";

function AboutProjects() {
  const history = useHistory();
  return (
    <>
      <AboutProjectsHero img={hero}>
        <AboutProjectsBannerWrapper />
      </AboutProjectsHero>
      <BottomImg img={stones}>
        <AboutProjectCard />
        <AboutButton onClick={() => history.push("/project-form")}>
          continue
        </AboutButton>
      </BottomImg>
    </>
  );
}

export default AboutProjects;
