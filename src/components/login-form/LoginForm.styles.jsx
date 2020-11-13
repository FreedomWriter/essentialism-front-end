import styled from "styled-components";
import { setColor } from "../../ui/globals/styles";

// custom ui
import { CustomLink } from "../../ui/custom-link/CustomLink.styles";
import { StyledForm } from "../../ui/custom-forms/CustomForm";

export const LoginLinkSignUp = styled(CustomLink)`
  background: transparent;
  width: 100%;
`;

export const StyledLoginForm = styled(StyledForm)`
  position: absolute;
  top: 7.5vh;
  right: 25%;
  h4 {
    color: ${setColor.offWhite};
  }
`;
