import styled from "styled-components";
import { media, setRem } from "../../ui/globals/styles";

export const CardsCenter = styled.div`
  width: 90vw;
  max-width: 90%;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 2.5%;
  width: 90vw;
  max-width: 90%;

  ${media.medium`
  grid-template-columns: repeat(3, 1fr);
  margin: 225px auto 0;
  grid-column-gap: ${setRem(32)};

  `};
`;
