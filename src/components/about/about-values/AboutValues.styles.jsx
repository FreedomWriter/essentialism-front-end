import React from "react";

import styled from "styled-components";

import Hero from "../../hero/Hero.component";

import {
  CustomButton,
  CustomButtonContainer
} from "../../custom-button/CustomButton";

import {
  setColor,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn,
  setTransition
} from "../../../globals/styles";

const AboutValuesBanner = ({ className }) => {
  return (
    <div className={className}>
      <h5>
        Enter Essentialism.
        <span>
          <span> </span>in a world with everything shouting for your attention,
          the disciplined pursuit of less has never been more needed. The Way of
          the Essentialist involves doing less, but better, so you can make the
          highest possible contribution. It’s not about getting more done in
          less time or getting less done. It’s about getting only the right
          things done. It’s about regaining control of our own choices about
          where to spend our time and energies instead of giving others implicit
          permission to choose for us. The first step to essentialism is
          identifying your values.
        </span>{" "}
      </h5>
    </div>
  );
};
const AboutValuesBannerWrapper = styled(AboutValuesBanner)`
  background: ${setColor.mainLight};
  margin: 10% auto;
  text-align: center;
  justify-content: center;
  width: 95%;
  max-width: 95%;
  min-height: 260px;
  height: 250px;
  color: ${setColor.mainColor};
  ${setLetterSpacing(3)};
  padding: 2%;

  h5 {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 100;
    margin: 0 auto;
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

  ${media.tablet` 
  margin: 7.5vh auto;
    ${setBorder({ width: "6px", color: setColor.mainColor })};
    h5 {
      width: 100%;
      font-size: 1.2rem;
    }
    `}
  ${media.phone` 
  margin: 7.5vh auto ;
    `}
`;

export default AboutValuesBannerWrapper;

export const AboutButton = styled(CustomButton)`
  border: none;
  margin: 3% auto;
`;

export const AboutButtonContainer = styled(CustomButtonContainer)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const AboutValuesHero = styled(Hero)`
  height: 300px;
  margin-bottom: 5vh;

  ${media.phone` 
  height: 97.5vh;
    `}

  ${media.tablet` 
  margin-bottom: -115vh;
    `}
`;
