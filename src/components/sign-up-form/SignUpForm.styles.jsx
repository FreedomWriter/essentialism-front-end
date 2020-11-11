import styled from "styled-components";
import {
  CustomButton,
  CustomButtonContainer,
} from "../custom-button/CustomButton";
import { CustomLink } from "../custom-link/CustomLink.styles";

export const SignUpButton = styled(CustomButton)`
  background: transparent;
  margin: 10% auto 0;
  border: transparent;
`;

export const SignUpLinkLogin = styled(CustomLink)`
  background: transparent;
  margin: 10% auto 0;
  border: transparent;
  text-decoration: none;
`;

export const SignUpButtonContainer = styled(CustomButtonContainer)`
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin-bottom: 10%;
`;

// import styled from "styled-components";
// import { setColor } from "../../globals/styles";

// // custom ui
// import { CustomLink } from "../../ui/custom-link/CustomLink.styles";
// import { StyledForm } from "../../ui/custom-forms/CustomForm";

// export const LoginLinkSignUp = styled(CustomLink)`
//   background: transparent;
//   width: 100%;
// `;

// export const StyledLoginForm = styled(StyledForm)`
//   position: absolute;
//   top: 7.5vh;
//   right: 25%;
//   h4 {
//     color: ${setColor.offWhite};
//   }
// `;
