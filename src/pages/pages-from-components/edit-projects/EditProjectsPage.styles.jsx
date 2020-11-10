import styled from "styled-components";

import { setFlex, setBackground, setColor } from "../../globals/styles";

// import ConfirmedTopValues from "../../confirmed-values/Confirmed-Values.component";

export const Hero = styled.header`
  height: 20vh;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
  border-bottom: 6px solid ${setColor.mainColor};
  margin-bottom: 10%;
`;

export const BottomImg = styled.header`
  height: 61vh;
  ${props =>
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0.17)" })};
  ${setFlex()};
`;
