import styled from "styled-components";
import { setFlex, setBackground, setColor } from "../../globals/styles";

export const ValuesSelectionHero = styled.header`
  height: 300px;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
  border-bottom: 6px solid ${setColor.mainColor};
`;

export const BottomImg = styled.header`
  height: 50vh;
  ${props =>
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0.17)" })};
  ${setFlex()};
`;
