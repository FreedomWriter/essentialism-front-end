import styled from "styled-components";
// // import { NarrowDownButton, NarDwnBtnContainer } from "./UsersTopValues.styles";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  media
} from "../../globals/styles";

// export const StyledConfirmedTopValues = styled(ConfirmedTopValues)`
//   background: ${setColor.mainLight};
//   margin: ${setRem(32)} auto;
//   max-width: 90%;
//   width: 500px;
//   color: ${setColor.offWhite};
//   text-align: center;
//   margin-top: 5%;
//   font-size: 1.8rem;
//   ${props =>
//     props.index === props.activeIndex ? "display: block" : "display: none"}

//   p {
//     font-size: 1.2rem;
//     border-bottom: 1px solid ${setColor.offWhite};
//   }

//   strong {
//     text-transform: capitalize;
//   }

//   span {
//     font-size: 1rem;
//     margin-bottom: 2%;
//     margin-top: 2%;
//   }

//   .card-info {
//     padding: ${setRem()};
//     h4 {
//       text-transform: capitalize;
//       ${setLetterSpacing()};
//     }
//     p {
//       ${setLetterSpacing()};
//     }
//   }

//   .toggle {
//     text-decoration: line-through;
//   }

//   ${setShadow.light};
//   ${setTransition()};
//   &:hover {
//     ${setShadow.dark};
//   }

//   .btns p {
//     margin-top: 5%;
//     color: ${setColor.mainColor};
//   }
// `);
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

export const EditValuesCard = styled.div`
  background: #eaeaea;
  margin: 0 auto;
  color: ${setColor.mainColor};
  margin: ${setRem(-200)} 0 ${setRem(-25)};
  max-height: 150px;
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
  min-height: 150px;
  height: 150px;
  `};
  ${media.phone`
  margin: 5% auto;
  min-height: 150px;
  height: 150px;

  `};
`;
