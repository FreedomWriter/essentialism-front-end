import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...theRest }) => {
  return (
    <Route
      {...theRest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component isLoading={props.isLoading} />;
        } else {
          console.log(
            "Privateroute.js: Privateroute: Route.render: redirecting!"
          );
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
