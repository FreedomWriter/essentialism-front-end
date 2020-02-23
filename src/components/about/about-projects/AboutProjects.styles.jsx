import React from "react";
import { useHistory } from "react-router";

import styled from "styled-components";

import Hero from "../../hero/Hero.component";
import {
  CustomButton,
  CustomButtonContainer
} from "../../custom-button/CustomButton";

import {
  setColor,
  setBackground,
  setFlex,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn,
  setTransition
} from "../../../globals/styles";

const AboutProjectsBanner = ({ className }) => {
  const history = useHistory();
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
            happy, so you say yes only to regret it later. You're working on so
            much that nothing gets done. Your year of yes has become a year of
            stress and you are ready to do something different.
          </span>{" "}
        </h5>
      </div>
    </Layout>
  );
};
const AboutProjectsBannerWrapper = styled(AboutProjectsBanner)`
  background: ${setColor.mainLight};
  margin: 30vh auto 0;
  text-align: center;
  justify-content: center;
  width: 90%;
  max-width: 90%;
  /* height: 400px; */
  min-height: 260px;
  /* max-height: 30vh; */
  color: ${setColor.mainColor};
  ${setLetterSpacing(3)};
  padding: 2%;

  h5 {
    text-transform: uppercase;
    font-size: 1.75rem;
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
  ${media.phone` 
  width: 90%
  margin-top: 45vh;
    ${setBorder({ width: "6px", color: setColor.mainColor })};
    h5 {
      width: 100%;
      font-size: 1.2rem;
    }`}

  ${media.tablet` 
  width: 90%
  margin-top: 65vh;
    ${setBorder({ width: "6px", color: setColor.mainColor })};
    h5 {
      width: 100%;
      font-size: 1.2rem;
    }`}
`;

export default AboutProjectsBannerWrapper;

export const AboutButton = styled(CustomButton)`
  border: none;
  margin: 5% auto;
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

export const AboutProjectsHero = styled(Hero)`
  ${media.phone` 
  height: 50vh;
  `}

  ${media.tablet` 
  height: 25vh;
 `}

  height: 25vh;
`;

export const BottomImg = styled.header`
  height: 71vh;
  display: flex;
  flex-flow: column nowrap;
  ${props =>
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0.17)" })};
  ${setFlex()};
  ${media.phone` 
  /* height: 50vh; */
  /* */
  image {
    display: none;
  }`}
`;
