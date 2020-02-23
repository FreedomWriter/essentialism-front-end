import styled from "styled-components";

import { setColor } from "../../globals/styles";

import { Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from "reactstrap";

export const StyledNavBar = styled(Navbar)`
  background: ${setColor.mainColor};
  color: ${setColor.offWhite};
`;

export const StyledNavbarToggler = styled(NavbarToggler)`
  color: ${setColor.offWhite};
`;

export const StyledNavbarBrand = styled(NavbarBrand)`
  color: ${setColor.offWhite};
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${setColor.offWhite};
  font-size: 1.2rem;
  cursor: pointer;
`;

export const StyledNav = styled(Nav)`
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin-top: 2%;
  border-top: 0.1rem ${setColor.offWhite} solid;
`;
