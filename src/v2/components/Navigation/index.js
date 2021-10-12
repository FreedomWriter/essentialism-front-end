import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "v2/api";
import { LOGIN_MODAL_OPEN, LOGOUT, SIGNUP_MODAL_OPEN } from "v2/utils";
import { Button } from "v2";

import { NavBar, UL } from "./styled";

function Navigation() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <NavBar>
      <UL>
        {isAuthenticated ? (
          <li>
            <Button
              type="button"
              onClick={() => {
                dispatch({ type: LOGOUT });
                logout();
              }}
            >
              log out
            </Button>
          </li>
        ) : (
          <>
            <li>
              <Button
                type="button"
                onClick={() => dispatch({ type: SIGNUP_MODAL_OPEN })}
              >
                sign up
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={() => dispatch({ type: LOGIN_MODAL_OPEN })}
              >
                log in
              </Button>
            </li>
          </>
        )}
      </UL>
    </NavBar>
  );
}

export default Navigation;
