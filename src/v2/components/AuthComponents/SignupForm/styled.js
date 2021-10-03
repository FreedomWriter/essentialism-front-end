import { Link } from "react-router-dom";
import styled from "styled-components";
import { setColor } from "v2/utils/styling";

export const LoginLinkSignUp = styled(Link)`
  background: transparent;
  color: ${setColor.mainColor};
  width: 264px;
  margin: 0 auto;
`;
