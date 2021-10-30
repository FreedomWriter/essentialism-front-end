import styled from "styled-components";
import { media, COLORS } from "v2/utils";

export const Header = styled.header`
  position: sticky;
  height: calc(80px + 40px);
  top: -40px;
  padding-top: 40px;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  h1 {
    padding-top: 16px;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    bottom: 32px;
    margin-top: auto;
    margin-bottom: auto;
    right: 16px;
  }
`;

export const UL = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  li {
    margin-inline-start: 0.8rem;
    margin-inline-end: 0.8rem;
    list-style-type: none;
  }

  ${media.small`justify-content: space-between`}
`;

export const LandingNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
