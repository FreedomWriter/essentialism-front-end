import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "v2/api";
import { LOGIN_MODAL_OPEN, LOGOUT, SIGNUP_MODAL_OPEN } from "v2/utils";
import { Button, Breadcrumbs, Crumb } from "v2/reusable"; 

import { UL, NavBar } from "./styled";

function Navigation() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      
        {!isAuthenticated ? (
          <NavBar>
          <Breadcrumbs>
            <Crumb href="/">Home</Crumb>
            <Crumb href="/just">just</Crumb>
            <Crumb href="/just/moving">moving</Crumb>
            {/* isCurrentPage gets passed to `aria-current` in base component (Crumb)
              which is "Applied to the last link in the set to indicate that it
              represents the current page."
              
              TODO: once I have a real implementation, this needs to be refactured
              so that it accurately affects which page we are currently on  */}
            <Crumb isCurrentPage href="/just/moving/right-along">
              right along
            </Crumb>
          </Breadcrumbs>
          <Button
              type="button"
              onClick={() => {
                dispatch({ type: LOGOUT });
                logout();
              }}
            >
              log out
            </Button>
          </NavBar>
        ) : (
          <nav>
          <UL>   
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
            </UL>
            </nav>
        )}
      
    </>
  );
}

export default Navigation;
