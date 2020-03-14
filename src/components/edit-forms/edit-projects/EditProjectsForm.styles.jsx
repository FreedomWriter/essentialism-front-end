import styled from "styled-components";
import { Form, Field } from "formik";
import {
  CustomButton,
  CustomButtonContainer
} from "../../custom-button/CustomButton";
import { CustomLink } from "../../custom-link/CustomLink.styles";

import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  media
} from "../../../globals/styles";
import Hero from "../../hero/Hero.component";

export const StyledHero = styled(Hero)`
  margin-top: -5%;
  height: 80vh;
`;
export const ConfirmUpdateButton = styled(CustomButton)`
  margin: 10% auto 0;
  border: none;
`;
export const EditValueButton = styled(CustomButton)`
  margin: 5% auto 0;
  border: none;
`;
export const FormContainer = styled(Form)`
  background: ${setColor.mainColor};
  margin: -5% auto 0;
  text-align: center;
  height: 500px;
  h4 {
    color: ${setColor.offWhite};
  }
  input {
    min-height: 5vh;
  }
  input::placeholder {
    text-align: center;
  }
  .value-input {
    max-height: 5vh;
  }
`;

export const StyledSection = styled.section`
  border: 1px solid red;
  max-width: 30vw;
  width: 200px;
  display: flex;
  align-items: flex-start;
  margin: auto 0;
`;

export const StyledValueField = styled(Field)`
  max-height: 30px;
`;

export const EditButton = styled(CustomButton)`
  margin: 5% 0 5% 65%;
  border: none;
`;

export const SignUpLinkLogin = styled(CustomLink)`
  background: transparent;
  margin: 10% auto 0;
  border: none;
  text-decoration: none;
`;

export const SignUpButtonContainer = styled(CustomButtonContainer)`
  flex-flow: row nowrap;
  margin-bottom: 10%;
`;

export const CardsCenter = styled.div`
  width: 90vw;
  max-width: 90%;
  margin: 30% auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${setRem(32)};

  ${media.large`
  width: 90vw;
  max-width: 90%;
  max-width: 1400px;
  margin: 375px auto 0;
  `};

  ${media.tablet`
  grid-template-columns: repeat(1, 1fr);
  margin-top: 25%;
  width: 90vw;
  max-width: 90%;
  `};
  ${media.phone`
  grid-template-columns: repeat(1, 1fr);
  width: 90vw;
  max-width: 90%;
  `};
`;

export const EditProjectsFormCard = styled.div`
  background: #eaeaea;
  margin: 0 auto;
  color: ${setColor.mainColor};
  margin: ${setRem(-200)} 0 ${setRem(-25)};
  min-height: 250px;
  width: 100%;

  .card-info {
    padding: ${setRem()};
    h4 {
      font-size: 1.5rem;
      text-transform: capitalize;
      ${setLetterSpacing()};
      margin-bottom: 1rem;
    }
    p {
      line-height: 1;
      font-size: 1.2rem;
      border-bottom: 1px solid ${setColor.mainColor};
    }
    div {
      ${setLetterSpacing()};
      p {
        font-size: 0.9rem;
        border-bottom: none;
      }
    }

    a {
      text-decoration: none;
    }
  }
  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }
  ${media.tablet`
  margin: 5% auto;
  min-height: 270px;
  height: 150px;
  `};
  ${media.phone`
  margin: 5% auto;
  min-height: 400px;
  height: 150px;

  `};
`;
