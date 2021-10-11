import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "v2/api";
import { LOGIN_MODAL_OPEN, LOGOUT, SIGNUP_MODAL_OPEN } from "v2/utils";

import { NavBar, UL } from "./styled";

function Navigation() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <NavBar>
      <UL>
        {isAuthenticated ? (
          <li>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: LOGOUT });
                logout();
              }}
            >
              log out
            </button>
          </li>
        ) : (
          <>
            <li>
              <button
                type="button"
                onClick={() => dispatch({ type: SIGNUP_MODAL_OPEN })}
              >
                sign up
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => dispatch({ type: LOGIN_MODAL_OPEN })}
              >
                log in
              </button>
            </li>
          </>
        )}
      </UL>
    </NavBar>
  );
}

export default Navigation;
