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
  display: grid;

  ${(props) => props.editing && `margin: 15% auto 0`}

  grid-template-columns: repeat(1, 1fr);
  margin-top: 5%;
  width: 90vw;
  max-width: 90%;
  border-top: 1px solid ${setColor.mainColor};

  ${media.medium`
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${setRem(32)};

  `};
`;
