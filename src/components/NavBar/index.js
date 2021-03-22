import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../store/actions/login.actions";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const history = useHistory();

  const handleClick = () => {
    dispatch(logout());
  };

  if (user !== "") {
    return (
      <div>
        <Link to="/" onClick={() => history.push("/home")}></Link>
        <p>{user.username}</p>
        <button onClick={toggleNavbar}>TOGGLE!</button>
        <div isOpen={!collapsed}>
          <nav>
            <ul>
              <li>
                <Link
                  to="/edit-profile/"
                  onClick={() => {
                    setCollapsed(true);
                    history.push("/edit-profile/");
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
                    history.push("/edit-values/");
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
                    history.push("/edit-projects/");
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
      </div>
    );
  }
};

export default NavBar;
