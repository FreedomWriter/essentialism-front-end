import styled from "styled-components";
import { setColor, media } from "v2/utils";

export const NavBar = styled.nav`
  background-color: ${setColor.main};
  color: ${setColor.white};

  /* button {
    background-color: ${setColor.white};
    color: ${setColor.main};
    margin: 1.6rem;
    width: 8rem;
    border-radius: 0.4rem;
  } */
`;

export const UL = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 1.6rem;
  li {
    margin: 0.8rem;
    list-style-type: none;
  }
  ${media.small`justify-content: space-between`}
`;
