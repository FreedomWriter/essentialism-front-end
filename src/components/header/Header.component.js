import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import { logout } from "../../store/actions/login.actions";
// import { getUser } from "../../store/actions/user.actions";
// import { getUserValues } from "../../store/actions/user-values.actions";
// import { getUserProjects } from "../../store/actions/projects.actions";

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

  const login = useSelector(state => state.login.user);
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    // dispatch(getUser(login.id));
    // dispatch(getUserValues(user.id));
    // //user_value_id is required for route, but not used to look up projects
    // dispatch(getUserProjects({ user_id: user.id, user_value_id: 1 }));
  }, []);

  // const userValues = useSelector(state => state.userValues.userValues);
  // console.log(userValues);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const history = useHistory();

  const handleClick = () => {
    dispatch(logout());
  };

  if (user !== "") {
    return (
      <StyledNavBar dark>
        <StyledNavbarBrand to="/" onClick={() => history.push("/home")}>
          {user.username}
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
                to="/edit-values"
                onClick={() => history.push("/edit-values/")}
              >
                Edit Values
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                to="/edit-projects"
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
