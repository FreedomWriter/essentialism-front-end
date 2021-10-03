import React from "react";
import { useSelector } from "react-redux";
import { logout } from "v2/api";

function Navigation() {
  const fakeHandler = () => console.log("you just be clickin");
  const { isAuthenticated } = useSelector((state) => state.login);
  return (
    <ul>
      <li>
        <button type="button" onClick={fakeHandler}>
          sign up
        </button>
        <button type="button" onClick={fakeHandler}>
          log in
        </button>
        {isAuthenticated && (
          <button type="button" onClick={() => logout()}>
            log out
          </button>
        )}
      </li>
    </ul>
  );
}

export default Navigation;
