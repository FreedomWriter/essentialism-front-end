import React from "react";

import styled from "styled-components";

import {
  CustomButton,
  CustomButtonContainer
} from "../../custom-button/CustomButton";

import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn,
  setTransition
} from "../../../globals/styles";

const ValuesBanner = ({ className, narrowDown, usersList }) => {
  return (
    <div className={className}>
      <h2>
        {narrowDown === false && usersList.length > 3 ? "now" : "you"}
        <span>
          {narrowDown === false && usersList.length > 3
            ? ` take some time to reflect on your values. Which ones
          really mean the most to you? Narrow your selection down to your
          essential three.`
            : ` know what's essential. after you confirm your choices, take some time to reflect on your values and tell us why these are the things that matter to you`}
        </span>{" "}
      </h2>
      <div className="info"></div>
    </div>
  );
};
const ValuesBannerWrapper = styled(ValuesBanner)`
  /* background: ${setColor.mainLight};
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  max-width: 60%;
  width: 500px;
  height: 30vh;
  min-height: 260px;
  max-height: 30vh;
  margin-top: 15%;
  margin-left: 0;
  color: ${setColor.mainColor}; */
  background: ${setColor.mainLight};
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  width: 600px;
  max-width: 90%;
  height: 425px;
  min-height: 260px;
  /* height: 32vh; */
  margin-top: -20rem;
  color: ${setColor.mainColor};
  padding: 2%;
  ${setLetterSpacing(3)};
  ${props =>
    props.usersList.length > 0 && props.endOfList === true
      ? "display: flex"
      : "display: none"}

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

export const NarrowDownButton = styled(CustomButton)`
  border: none;
  margin: 5% auto;
`;

export const NarDwnBtnContainer = styled(CustomButtonContainer)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
