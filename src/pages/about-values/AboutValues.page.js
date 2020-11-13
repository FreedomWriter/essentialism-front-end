import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import AboutValuesBannerWrapper, { AboutButton } from "./AboutValues.styles";

import AboutValuesCard from "../../components/cards/AboutValuesCard.component";

import { getUser } from "../../store/actions/user.actions";
import LoadingSpinner from "../../ui/LoadingSpinner.component";

function About() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.login.user);
  dispatch(getUser(user.id));

  const isLoading = useSelector((state) => state.login.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }
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
