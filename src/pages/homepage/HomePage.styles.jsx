import styled from "styled-components";
import { setBackground, setFlex } from "../../globals/styles";

import Hero, { BottomImg } from "../../components/hero/Hero.component";

export const StyledHero = styled(Hero)`
  height: 30vh;
  border: none;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
`;

export const StyledBottomImg = styled(BottomImg)`
  height: 65vh;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
`;
