import styled from "styled-components";
import { setColor } from "../../ui/globals/styles";

// custom ui
import { CustomLink } from "../../ui/custom-link/CustomLink.styles";

export const LoginLinkSignUp = styled(CustomLink)`
  background: transparent;
  color: ${setColor.mainColor};
  width: 264px;
  margin: 0 auto;
`;

export const H1 = styled.h1`
  color: ${setColor.mainColor};
  width: 100%;
  text-align: center;
`;
