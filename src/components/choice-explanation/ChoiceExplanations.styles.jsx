import styled from "styled-components";
import { Form } from "formik";
import { CustomButton } from "../../ui/custom-button/CustomButton";
import { CustomLink } from "../../ui/custom-link/CustomLink.styles";
import UsersTopValues from "../user-top-values/UsersTopValues.component";

import { setFlex, setBackground, setColor } from "../../ui/globals/styles";

export const ExplanationTopValues = styled(UsersTopValues)``;

export const Hero = styled.header`
  height: 33vh;
  min-height: 285px;
  ${(props) => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
  border-bottom: 6px solid ${setColor.mainColor};
`;

export const BottomImg = styled.header`
  /* margin-top: -5vh; */
  height: 71vh;
  display: flex;
  flex-flow: column nowrap;
  ${(props) =>
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0.17)" })};
  ${setFlex()};
`;

export const ConfirmExplanationButton = styled(CustomButton)`
  /* background: transparent; */
  margin: 2% auto 0;
  border: transparent;
`;

export const ConfirmExplanationLink = styled(CustomLink)`
  background: transparent;
  margin: 10% auto 0;
  border: transparent;
`;

export const FormContainer = styled(Form)`
  margin: 2% auto 0;
  text-align: center;
  height: 375px;
  width: 80%;
  padding: 5%;
  background: ${setColor.mainColor}
    ${(props) =>
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
