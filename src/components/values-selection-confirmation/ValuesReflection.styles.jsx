import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import {
  setFlex,
  setBackground,
  setColor,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn,
  setTransition
} from "../../globals/styles";

import { CustomButton } from "../custom-button/CustomButton";

const ValuesBanner = ({ className, usersList }) => {
  const history = useHistory();
  return (
    <div className={className}>
      <h2>
        {usersList.length > 3 ? "now" : "you"}
        <span>
          {usersList.length > 3
            ? ` take some time to reflect on your values. Which ones
            really mean the most to you? Narrow your selection down to your
            essential three.`
            : ` know what's essential. after you confirm your choices, take some time to reflect on your values and tell us why these are the things that matter to you`}
          {usersList.length > 3 ? (
            <Button onClick={() => history.push(`/values-confirmation`)}>
              Reflect
            </Button>
          ) : (
            <Button
              onClick={() => {
                return history.push(`/values-confirmation`);
              }}
            >
              Reflect
            </Button>
          )}
        </span>
      </h2>
      <div className="info"></div>
    </div>
  );
};
const ValuesBannerWrapper = styled(ValuesBanner)`
  background: ${setColor.mainLight};
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  width: 80%;
  max-width: 90%;
  height: 300px;
  min-height: 325px;
  color: ${setColor.mainColor};
  padding: 2%;
  ${setLetterSpacing(3)};

  h2 {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 100;
    span {
      text-transform: capitalize;
      color: ${setColor.offWhite};
      ${fadeIn("100%", "-10%", "0")}
      ${setTransition("all", "1s", "ease-in-out")}
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${media.phone` width: 90vw
      ${setBorder({ width: "6px", color: setColor.mainColor })};
      h2 {
        width: 75%;
        font-size: 1.2rem;
      }`}
`;

export default ValuesBannerWrapper;

export const Hero = styled.header`
  margin-top: -5vh;
  height: 100vh;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
  border-bottom: 6px solid ${setColor.mainColor};
`;

export const Button = styled(CustomButton)`
  border: none;
  margin: 5% auto;
`;
