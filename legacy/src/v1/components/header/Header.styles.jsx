import styled from "styled-components";

import { setColor } from "../../ui/globals/styles";

import { Navbar, NavbarToggler, NavbarBrand, Nav, NavLink } from "reactstrap";

export const StyledNavBar = styled(Navbar)`
  width: 100%;
  background: ${setColor.main};
  color: ${setColor.white};
  justify-self: center;
`;

export const StyledNavbarToggler = styled(NavbarToggler)`
  color: ${setColor.white};
`;

export const StyledNavbarBrand = styled(NavbarBrand)`
  color: ${setColor.white};
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${setColor.white};
  font-size: 1.2rem;
  cursor: pointer;
`;

export const StyledNav = styled(Nav)`
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin-top: 2%;
  border-top: 0.1rem ${setColor.white} solid;
`;
