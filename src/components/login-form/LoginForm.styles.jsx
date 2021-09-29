import styled, { css } from "styled-components";
import { setColor, media } from "../../ui/globals/styles";

// custom ui
import { CustomLink } from "../../ui/custom-link/CustomLink.styles";

export const LoginLinkSignUp = styled(CustomLink)`
  background: transparent;
  width: 100%;
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 7.5vh;
  right: 25%;
  h1 {
    color: ${setColor.offWhite};
    text-align: center;
  }

  a {
    width: 20rem;
  }

  a:hover {
    background-color: transparent;
    color: ${setColor.offWhite};
  }

  ${media.phone`
    top: 0;
    right: 0;
    left: 0;
    margin: 1.5rem auto;
  `}
`;

export const SignUpButtonContainer = styled.div`
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin: 1.5rem auto;

  ${(props) =>
    props.isDisabled &&
    css`
      button {
        background-color: ${setColor.mainLight};
        color: ${setColor.offWhite};
        cursor: default;
      }

      button:hover {
        background-color: ${setColor.mainLight};
        color: ${setColor.offWhite};
      }
    `}
`;
