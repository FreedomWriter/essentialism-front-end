import styled from "styled-components";
import { setColor } from "v2/utils";

export const NavBar = styled.nav`
  background-color: ${setColor.main};
  color: ${setColor.white};

  button {
    background-color: ${setColor.white};
    color: ${setColor.main};
    margin: 0.8rem;
    width: 8rem;
    border-radius: 0.4rem;
  }
`;

export const UL = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    list-style-type: none;
  }
`;
