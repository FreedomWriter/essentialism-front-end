import React from "react";

import styled from "styled-components";

import {
  CustomButton,
  CustomButtonContainer,
} from "../../ui/custom-button/CustomButton";

import {
  setColor,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn,
  setTransition,
} from "../../ui/globals/styles";

const AboutProjectsBanner = ({ className }) => {
  return (
    <Layout>
      <div className={className}>
        <h5>
          What you do matters.
          <span>
            <span> </span>Think about the things you are spending your time and
            energy on. From work to family to friends you have demands on being
            made on your time. You may feel like saying yes to everything will
            get you the recognition you crave at work. You want to make everyone
            happy, so you say yes only to regret it later. You&apos;re working
            on so much that nothing gets done. Your year of yes has become a
            year of stress and you are ready to do something different.
          </span>{" "}
        </h5>
      </div>
    </Layout>
  );
};
const AboutProjectsBannerWrapper = styled(AboutProjectsBanner)`
  background: ${setColor.light};
  margin: 2.5% auto;
  text-align: justify;
  justify-content: center;
  width: 95%;
  min-height: 260px;
  color: ${setColor.main};
  ${setLetterSpacing(3)};
  padding: 2%;
  border-radius: 0.5em;

  h5 {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 auto;
    span {
      text-transform: capitalize;
      color: ${setColor.white};
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
    ${setBorder({ width: "6px", color: setColor.main })};
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

export default AboutProjectsBannerWrapper;

export const AboutButton = styled(CustomButton)`
  border: transparent;
  margin: 5% auto 0;
  ${media.large` 
    margin: 5% auto 2%;
    `}
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
