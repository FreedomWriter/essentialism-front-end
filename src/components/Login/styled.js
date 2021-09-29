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
