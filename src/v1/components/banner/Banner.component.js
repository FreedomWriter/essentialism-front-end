import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getZen } from "../../store/actions/zen.quotes.actions";

import { SignUpButtonContainer } from "../sign-up-form/SignUpForm.styles";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn,
} from "../../ui/globals/styles";
import { CustomButton } from "../../ui/custom-button/CustomButton";
import { postLogin } from "../../store/actions/login.actions";

const Banner = ({ className }) => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.zen.quote);
  useEffect(() => {
    dispatch(getZen());
  }, [dispatch]);

  netlifyIdentity.on("init");
  const authenticate = () => {
    netlifyIdentity.open();
    netlifyIdentity.on("login", (user) => {
      dispatch(postLogin(user));
    });
  };

  const handleLogin = () => {
    authenticate();
  };

  const user = netlifyIdentity.currentUser();
  console.log({ user });
  return (
    <div className={className}>
      <SignUpButtonContainer>
        <CustomButton onClick={handleLogin}>Log In</CustomButton>
      </SignUpButtonContainer>
      <h3>
        Remember <span>{quote || "Rate limited again!"}</span>{" "}
      </h3>
      <div className="info" />
    </div>
  );
};
const BannerWrapper = styled(Banner)`
  background: ${setColor.light};
  margin: 50vh auto 0;
  border-radius: 0.5em;

  text-align: center;
  justify-content: center;
  padding: 2%;
  ${setLetterSpacing(3)}
  a {
    text-decoration: none;
  }
  h3 {
    text-transform: uppercase;
    font-size: ${setRem(48)};
    span {
      text-transform: capitalize;
      color: ${setColor.white};
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${media.phone` width: 100%;`}
  ${media.tablet` width: 70vw;
    ${setBorder({ width: "6px", color: setColor.main })};
    p {
      width: 75%;
    }`}

  h3 {
    ${fadeIn("100%", "-10%", "0")}
    font-size: 1.2rem;
  }
  .info {
    ${fadeIn("-100%", "10%", "0")}
  }
`;

export default BannerWrapper;
