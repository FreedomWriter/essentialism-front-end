import styled from "styled-components";
import { Form } from "formik";
import { CustomButton } from "../custom-button/CustomButton";
import { CustomLink } from "../custom-link/CustomLink.styles";

import { setFlex, setBackground, setColor } from "../../globals/styles";

export const Hero = styled.header`
  height: 33vh;
  min-height: 400px;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
  border-bottom: 6px solid ${setColor.mainColor};
`;

export const BottomImg = styled.header`
  /* margin-top: -5vh; */
  height: 71vh;
  display: flex;
  flex-flow: column nowrap;
  ${props =>
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0.17)" })};
  ${setFlex()};
`;

export const ConfirmExplanationButton = styled(CustomButton)`
  /* background: transparent; */
  margin: 10% auto 0;
  border: none;
`;

export const ConfirmExplanationLink = styled(CustomLink)`
  background: transparent;
  margin: 10% auto 0;
  border: none;
`;

export const FormContainer = styled(Form)`
  margin: -10% auto 0;
  text-align: center;
  height: 500px;
  width: 80%;
  padding: 5%;
  background: ${setColor.mainColor}
    ${props =>
      props.index === props.active ? "display: block" : "display: none"}
    input {
    min-height: 15vh;
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
