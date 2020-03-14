import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import { logout } from "../../store/actions/login.actions";

import {
  StyledNavBar,
  StyledNavbarBrand,
  StyledNavLink,
  StyledNavbarToggler,
  StyledNav
} from "./Header.styles";

import { Collapse, NavItem } from "reactstrap";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const dispatch = useDispatch();

  const welcome = useSelector(state => state.login.message);
  useEffect(() => {}, []);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const history = useHistory();

  const handleClick = () => {
    dispatch(logout());
  };

  if (welcome !== "") {
    return (
      <StyledNavBar dark>
        <StyledNavbarBrand to="/" onClick={() => history.push("/home")}>
          {welcome}
        </StyledNavbarBrand>
        <StyledNavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <StyledNav navbar>
            <NavItem>
              <StyledNavLink
                to="/edit-profile/"
                onClick={() => history.push("/edit-profile/")}
              >
                Edit Profile
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                to="/edit-values/"
                onClick={() => {
                  console.log(`CLICKKKKEDDD EDIT VALUES`);
                }}
              >
                Edit Values
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                to="/edit-projects/"
                onClick={() => history.push("/edit-projects/")}
              >
                Edit Projects
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink onClick={handleClick} to="/">
                Log Out
              </StyledNavLink>
            </NavItem>
          </StyledNav>
        </Collapse>
      </StyledNavBar>
    );
  }
};

export default Header;
