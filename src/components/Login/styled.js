import styled from "styled-components";
import { setColor, media } from "../../ui/globals/styles";

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
