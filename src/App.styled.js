import styled from "styled-components";
import { setColor
     } from "v2/utils";

export const Header = styled.header`
    position: sticky;
    height: calc(64px + 24px);
    top: -24px;
    padding-top: 24px;
    background-color: ${setColor.main};
    color: ${setColor.white};
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;



  button {
      width: 120px;
      
  }
`;