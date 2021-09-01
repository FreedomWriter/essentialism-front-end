import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../store/actions/login.actions";
import FakeContainer from "ui/FakeContainer";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const loggedIn = useSelector((state) => state.login.loggedIn);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const handleClick = () => {
    dispatch(logout());
  };

  return loggedIn ? (
    <FakeContainer>
      <Link to="/home"></Link>
      <p>{user.username}</p>
      <button onClick={toggleNavbar}>TOGGLE!</button>
      <div>
        <nav>
          <ul>
            <li>
              <Link
                to="/edit-profile/"
                onClick={() => {
                  setCollapsed(true);
                }}
              >
                Edit Profile
              </Link>
            </li>
            <li>
              <Link
                to="/edit-values"
                onClick={() => {
                  setCollapsed(true);
                }}
              >
                Edit Values
              </Link>
            </li>
            <li>
              <Link
                to="/edit-projects"
                onClick={() => {
                  setCollapsed(true);
                }}
              >
                Edit Projects
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/">
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </FakeContainer>
  ) : (
    <FakeContainer>
      <nav>
        <Link
          to="/login"
          onClick={() => {
            setCollapsed(true);
          }}
        >
          Log In
        </Link>
        <Link
          to="/signup"
          onClick={() => {
            setCollapsed(true);
          }}
        >
          Sign Up
        </Link>
      </nav>
    </FakeContainer>
  );
};

export default NavBar;
