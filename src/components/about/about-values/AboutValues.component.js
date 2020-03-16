import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import StyledBannerWrapper, { AboutHero } from "../BannerWrapper";

import AboutValuesBannerWrapper, { AboutButton } from "./AboutValues.styles";

import hero from "../../../images/hero.JPG";
import AboutValuesCard from "../cards/AboutValuesCard.component";

import { getUser } from "../../../store/actions/user.actions";

function About() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(state => state.login.user);
  dispatch(getUser(user.id));
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
