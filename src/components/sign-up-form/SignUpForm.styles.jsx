import styled from "styled-components";
import {
  CustomButton,
  CustomButtonContainer
} from "../custom-button/CustomButton";
import { CustomLink } from "../custom-link/CustomLink.styles";

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
