import React from "react";

import styled from "styled-components";

import { CustomButton } from "../../ui/custom-button/CustomButton";

import {
  setColor,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn,
  setTransition,
} from "../../ui/globals/styles";

const AboutValuesBanner = ({ className }) => {
  return (
    <div className={className}>
      <h5>
        Enter Essentialism.
        <span>
          in a world with everything shouting for your attention, the
          disciplined pursuit of less has never been more needed. The Way of the
          Essentialist involves doing less, but better, so you can make the
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
  margin: 2.5% auto;
  text-align: justify;
  justify-content: center;
  width: 95%;
  min-height: 260px;
  color: ${setColor.mainColor};
  ${setLetterSpacing(3)};
  padding: 2%;
  border-radius: 10px;

  h5 {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 auto;
    span {
      text-transform: capitalize;
      color: ${setColor.offWhite};
      font-weight
      ${fadeIn("100%", "-10%", "0")}
      ${setTransition("all", "1s", "ease-in-out")}
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }

  ${media.tablet` 
  height: 350px;
    ${setBorder({ width: "6px", color: setColor.mainColor })};
    h5 {
      width: 100%;
      span {
  font-size: 1.2rem;
      }
    }
    `}
  ${media.phone` 
  margin: 0;
  height: 92.5vh;
  min-width: 100%;
  padding: 5%;
  ${setLetterSpacing(2)};
  border-radius: 0;
  h5 {
    font-size: 1.35rem;
    span {
      font-size: 1.2rem;
    }
  }
    `}
`;

export default AboutValuesBannerWrapper;

export const AboutButton = styled(CustomButton)`
  border: transparent;
  margin: 5% auto 0;
  ${media.large` 
    margin: 5% auto 2%;
    `}
`;
