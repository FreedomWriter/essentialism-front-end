import styled from "styled-components";
import {
  setFlex,
  setBackground,
  setColor,
  media,
} from "../../ui/globals/styles";

const Hero = styled.header`
  height: 50vh;
  ${(props) => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
  border-bottom: 6px solid ${setColor.mainColor};
  ${media.small` 
  max-height: 42.5vh;
    `}
`;

export default Hero;

export const BottomImg = styled.header`
  min-height: 50vh;
  ${(props) =>
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0.17)" })};
  ${setFlex()};
  ${media.small` 
  max-height: 42.5vh;
    `}
`;
