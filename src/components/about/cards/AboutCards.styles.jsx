import styled from "styled-components";
import { media, setRem } from "../../../globals/styles";

export const CardsCenter = styled.div`
  width: 90vw;
  max-width: 90%;
  margin: 225px auto 0;
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
  margin: 0 auto;
  min-width: 90%;
  /* max-width: 90%; */
  `};
`;
