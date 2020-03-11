import styled from "styled-components";

import { setFlex, setBackground } from "../../globals/styles";

export const Hero = styled.header`
  margin-top: -5vh;
  height: 100vh;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
`;
