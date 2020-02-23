import styled from "styled-components";

import { setFlex, setBackground, setColor } from "../../../globals/styles";

// import ConfirmedTopValues from "../../confirmed-values/Confirmed-Values.component";

export const Hero = styled.header`
  height: 20vh;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
  border-bottom: 6px solid ${setColor.mainColor};
`;

export const BottomImg = styled.header`
  margin-top: -5vh;
  height: 71vh;
  display: flex;
  flex-flow: column nowrap;
  ${props =>
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0.17)" })};
  ${setFlex()};
`;
