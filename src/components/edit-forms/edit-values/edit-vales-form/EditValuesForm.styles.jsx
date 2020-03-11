import styled from "styled-components";
import { Form, Field } from "formik";
import {
  CustomButton,
  CustomButtonContainer
} from "../../../custom-button/CustomButton";
import { CustomLink } from "../../../custom-link/CustomLink.styles";

import { setFlex, setBackground, setColor } from "../../../../globals/styles";

export const ConfirmExplanationButton = styled(CustomButton)`
  margin: 10% auto 0;
  border: none;
`;

export const FormContainer = styled(Form)`
  background: ${setColor.mainColor};
  margin: -5% auto 0;
  text-align: center;
  height: 90%;
  h4 {
    color: ${setColor.offWhite};
  }
  input {
    min-height: 5vh;
  }
  input::placeholder {
    text-align: center;
  }
  .value-input {
    max-height: 5vh;
  }
`;

export const StyledSection = styled.section`
  border: 1px solid red;
  max-width: 30vw;
  width: 200px;
  display: flex;
  align-items: flex-start;
  margin: auto 0;
`;

export const StyledValueField = styled(Field)`
  max-height: 30px;
`;

export const SignUpButton = styled(CustomButton)`
  background: transparent;
  margin: 10% auto 0;
  border: none;
`;

export const SignUpLinkLogin = styled(CustomLink)`
  background: transparent;
  margin: 10% auto 0;
  border: none;
  text-decoration: none;
`;

export const SignUpButtonContainer = styled(CustomButtonContainer)`
  flex-flow: row nowrap;
  margin-bottom: 10%;
`;
