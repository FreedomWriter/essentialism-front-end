import styled from "styled-components";

import Hero from "../hero/Hero.component";

import {
  CustomButton,
  CustomButtonContainer,
} from "../custom-button/CustomButton";

import { setColor, setBorder, media } from "../../globals/styles";

const StyledBannerWrapper = styled.div`
  /* margin: 2% auto;
  text-align: center;
  justify-content: center;
  width: 95%;
  max-width: 95%;
  min-height: 260px;
  height: 260px;
  color: ${setColor.mainColor};
  padding: 2%; */

  ${media.tablet` 
  margin: 5% auto;
  height: 300px;
    ${setBorder({ width: "6px", color: setColor.mainColor })};
    h5 {
      width: 100%;
      span {
  font-size: 1rem;
      }
    }
    `}
  ${media.phone` 
  /* margin: 0 auto ;
  width: 100%;
  height: 85vh; */
  h5 {
    font-size: 1.40rem;
    span {
      font-size: 1.25rem;
    }
  }
    `}
`;

export default StyledBannerWrapper;

export const AboutButton = styled(CustomButton)`
  border: none;
  margin: 2% auto;
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

export const AboutHero = styled(Hero)`
  height: 325px;
  margin-bottom: 5vh;

  ${media.phone` 
  min-height: 97.5vh;
    margin-bottom: -50px;
    `}

  ${media.tablet` 
  height: 350px;
    `}
`;
