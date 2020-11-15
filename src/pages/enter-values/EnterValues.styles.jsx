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

const ChoseValuesBanner = ({ className, showPrompts }) => {
  return (
    <div className={className}>
      <h5>
        What do you value?
        <br></br>
        <br></br>
        <span>
          take some time to write out what you value. Don't spend much time
          thinking about it, just write down the things that are important to
          you. Try to limit each entry to one or two words, remember the goal is
          hone in on what's really essential. What motivates you to get out of
          the bed in the morning? What's the last thing you think about before
          you go to sleep? If you need some help getting started, here are some{" "}
          <span className="prompt" onClick={showPrompts}>
            prompts
          </span>
          .
        </span>{" "}
      </h5>
    </div>
  );
};
const ChoseValuesBannerWrapper = styled(ChoseValuesBanner)`
  background: ${setColor.mainLight};
  margin: 2.5% auto;
  text-align: justify;
  justify-content: center;
  width: 95%;
  min-height: 260px;
  ${setLetterSpacing(3)};
  padding: 2%;
  border-radius: 0.5em;
  .prompt {
    color: ${setColor.mainColor};
    text-decoration: underline ${setColor.mainColor};
    text-underline-offset: auto;
    cursor: pointer;
  }
  h5 {
    text-transform: uppercase;
    color: ${setColor.offWhite};
    font-size: 1.5rem;
    font-weight: 400;
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

export default ChoseValuesBannerWrapper;

export const SubmitValuesButton = styled(CustomButton)`
  border: transparent;
  margin: 2% auto;
  ${media.large`
    margin: 5% auto 2%;
    `}
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  max-width: 90%;
  margin: 0 auto;
`;

export const CustomValuesContainter = styled.div`
  max-width: 90%;
  margin: 0 auto;
  border: 1px solid ${setColor.mainColor};
  border-radius: 0.5em;
  padding: 2%;
  display: flex;
  flex-flow: column nowrap;
  ul {
    margin: 0 5%;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: center;
  }
  li {
    min-width: 25%;
    max-width: 90%;
    margin: 1% auto;
    text-transform: capitalize;
    font-size: 1em;
  }
`;
