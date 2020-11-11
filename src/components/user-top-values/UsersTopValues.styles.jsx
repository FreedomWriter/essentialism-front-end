import styled from "styled-components";

import {
  CustomButton,
  CustomButtonContainer,
} from "../custom-button/CustomButton";

import { setBackground, setFlex } from "../../globals/styles";

export const BottomImg = styled.header`
  margin-top: -5vh;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  ${(props) =>
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0.17)" })};
  ${setFlex()};
`;

export const NarrowDownButton = styled(CustomButton)`
  border: transparent;
  margin: 5% auto;
`;

export const NarDwnBtnContainer = styled(CustomButtonContainer)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
