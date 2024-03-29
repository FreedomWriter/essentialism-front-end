import styled from "styled-components";
import { Form } from "formik";
import {
  CustomButton,
  CustomButtonContainer,
} from "../../ui/custom-button/CustomButton";
import { CustomLink } from "../../ui/custom-link/CustomLink.styles";

import { setFlex, setBackground, setColor } from "../../ui/globals/styles";

export const Hero = styled.header`
  height: 45vh;
  ${(props) => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
  border-bottom: 6px solid ${setColor.main};
`;

export const BottomImg = styled.header`
  /* margin-top: -5vh; */
  min-height: 51vh;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  ${(props) =>
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0.17)" })};
  ${setFlex()};
`;

export const ConfirmExplanationButton = styled(CustomButton)`
  /* background: transparent; */
  margin: 20% auto 0;
  border: transparent;
`;

export const ConfirmExplanationLink = styled(CustomLink)`
  background: transparent;
  margin: 10% auto 0;
  border: transparent;
`;

export const ButtonContainer = styled(CustomButtonContainer)`
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
`;

export const FormContainer = styled(Form)`
  margin: 0 auto;
  padding: 20vh auto 0;
  width: 50%;
  height: 500px;
  min-height: 600px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  color: ${setColor.mainWhite};
  position: absolute;
  top: 15%;
  right: 25%;
  background-color: rgb(61, 69, 102, 0.975);
  text-align: center;
  padding: 5%;
  background: ${setColor.main};
  border-radius: 0.5em;
  ${(props) =>
    props.index === props.active ? "display: block" : "display: none"}
  input {
    min-height: 5vh;
    padding-top: 5%;
  }
  input::placeholder,
  :active,
  :visited {
    text-align: center;
  }
  label {
    font-size: 1.8rem;
  }
`;

export const Sizer = styled.section``;
