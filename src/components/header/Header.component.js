import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getUser } from "../../store/actions/user.actions";

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

  const id = useSelector(state => state.login.id);

  const welcome = useSelector(state => state.login.welcome);

  const localWelcome = JSON.parse(localStorage.getItem("welcome"));

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    id && localStorage.token && dispatch(getUser(id, token));
  }, [id, token]);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const history = useHistory();

  const handleClick = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const valueOnboardingComplete = JSON.parse(
    localStorage.getItem("valueOnboardingComplete")
  );

  if (localWelcome || welcome !== "") {
    return (
      <div>
        <StyledNavBar dark>
          <StyledNavbarBrand to="/" onClick={() => history.push("/home")}>
            {localWelcome || welcome}
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
                    valueOnboardingComplete && valueOnboardingComplete === true
                      ? history.push("/edit-values/")
                      : history.push("/values-selection");
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
      </div>
    );
  }
};

export default Header;
