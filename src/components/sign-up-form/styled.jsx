import styled from "styled-components";
import { media, setColor } from "../../ui/globals/styles";
import {
  CustomButton,
  CustomButtonContainer,
} from "../../ui/custom-button/CustomButton";
import { CustomLink } from "../../ui/custom-link/CustomLink.styles";

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
  padding: 16px;
`;

export const Container = styled.div`
  border: 1px solid ${setColor.mainColor};
  border-radius: 8px;
  margin: 0 auto;
  margin-top: calc(50vh - 250px);
  width: 300px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${setColor.offWhite} ${media.medium`
    width: 500px;
    height: 500px;
  `};
`;

// import styled from "styled-components";
// import { setColor } from "../../ui/globals/styles";

// // custom ui
// import { CustomLink } from "../../ui/custom-link/CustomLink.styles";
// import { StyledForm } from "../../ui/custom-forms";

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
