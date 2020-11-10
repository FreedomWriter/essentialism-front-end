import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import AboutValuesBannerWrapper, { AboutButton } from "./AboutValues.styles";

import AboutValuesCard from "../cards/AboutValuesCard.component";

import { getUser } from "../../store/actions/user.actions";

function About() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.login.user);
  dispatch(getUser(user.id));
  return (
    <>
      <AboutValuesBannerWrapper />
      <AboutValuesCard />
      <AboutButton onClick={() => history.push("/values-selection")}>
        begin
      </AboutButton>
    </>
  );
}

export default About;
