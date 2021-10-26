import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...theRest }) => (
  <Route
    {...theRest}
    render={(props) => {
      if (localStorage.getItem("threeToken")) {
        return <Component isLoading={props.isLoading} />;
      }
      console.log("Privateroute.js: Privateroute: Route.render: redirecting!");
      return <Redirect to="/" />;
    }}
  />
);

export default PrivateRoute;
