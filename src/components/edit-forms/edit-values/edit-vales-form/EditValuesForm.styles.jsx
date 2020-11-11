import styled from "styled-components";
import { Field } from "formik";
import { CustomButton } from "../../../../ui/custom-button/CustomButton";

import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  media,
} from "../../../../globals/styles";

export const EditValuesButton = styled(CustomButton)`
  margin: 5% auto 0;
  border: transparent;
`;

export const StyledValueField = styled(Field)`
  max-height: 30px;
`;

export const EditButton = styled(CustomButton)`
  margin: 5% 0 5% 65%;
  border: transparent;
`;
export const EditCardButton = styled(CustomButton)`
  width: 20%;
  min-width: 100px;
  margin: 5% auto;
  border: transparent;
`;

export const CardsCenter = styled.div`
  width: 90vw;
  max-width: 90%;
  margin: 25% auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${setRem(32)};
  ${(props) => props.editing && `margin: 15% auto 0`}

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

export const EditCardCenter = styled(CardsCenter)`
  grid-template-columns: 1;
  margin: 15% 5%;
`;

export const EditValuesCard = styled.div`
  background: #eaeaea;
  margin: 0 auto;
  color: ${setColor.mainColor};
  margin: ${setRem(-200)} 0 ${setRem(-25)};
  min-height: 250px;
  width: 100%;

  ${(props) => props.editing && `min-height: 150px; height: 150px`}

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

export const EditValuesFormCard = styled(EditValuesCard)`
  width: 80rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
