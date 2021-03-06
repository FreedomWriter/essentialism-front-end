import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getZen } from "../../store/actions/zen.quotes.actions";

import { SignUpButtonContainer } from "../../components/sign-up-form/SignUpForm.styles";
import styled from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn,
} from "../../ui/globals/styles";
import { CustomLink } from "../../ui/custom-link/CustomLink.styles";

const Banner = ({ className, quote, getZen }) => {
  useEffect(() => {
    getZen();
  }, [getZen]);

  return (
    <div className={className}>
      <SignUpButtonContainer>
        <CustomLink to="/in">Log In</CustomLink>
        <CustomLink to="/up">Sign Up</CustomLink>
      </SignUpButtonContainer>
      <h3>
        Remember <span>{quote}</span>{" "}
      </h3>
      <div className="info"></div>
    </div>
  );
};
const BannerWrapper = styled(Banner)`
  background: ${setColor.mainLight};
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
      color: ${setColor.offWhite};
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${media.phone` width: 100%;`}
  ${media.tablet` width: 70vw;
    ${setBorder({ width: "6px", color: setColor.mainColor })};
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

const mapStateToProps = (state) => {
  return {
    quote: state.zen.quote,
    isLoading: state.zen.isLoading,
  };
};

export default connect(mapStateToProps, { getZen })(BannerWrapper);
