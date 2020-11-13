import styled from "styled-components";

import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  media,
} from "../../ui/globals/styles";

export const CardsCenter = styled.div`
  width: 90vw;
  max-width: 90%;
  margin: 17.5% auto 0;
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
  margin-top: 5%;
  width: 90vw;
  max-width: 90%;
  `};
  ${media.phone`

  margin: 5% auto;
  grid-template-columns: repeat(1, 1fr);
  width: 90vw;
  max-width: 90%;
  `};
`;

export const EditValuesCard = styled.div`
  background: #eaeaea;
  margin: 0 auto;
  color: ${setColor.mainColor};
  margin: ${setRem(-200)} 0 ${setRem(-25)};
  max-height: 150px;
  width: 100%;
  border-radius: 10px;

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
  min-height: 150px;
  height: 150px;
  margin-bottom: 0;
  `};
  ${media.phone`
  margin: 5% auto;
  min-height: 150px;
  height: 150px;
  margin-bottom: 0;

  `};
`;
