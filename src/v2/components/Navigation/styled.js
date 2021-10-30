import styled from "styled-components";
import { media } from "v2/utils";



export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;


  button {
      width: 120px;
      height: 32px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
      right: 16px;
  }
`;

export const UL = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 1.6rem;
  li {
    margin: 0.8rem;
    list-style-type: none;
  }
  button {
      width: 120px;
      height: 32px;
      /* position: absolute;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
      right: 16px; */
  }
  ${media.small`justify-content: space-between`}
`;
