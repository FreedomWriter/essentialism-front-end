// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...theRest }) => (
//   <Route
//     {...theRest}
//     render={(props) => {
//       if (localStorage.getItem("threeToken")) {
//         return <Component isLoading={props.isLoading} />;
//       }
//       console.log("Privateroute.js: Privateroute: Route.render: redirecting!");
//       return <Redirect to="/" />;
//     }}
//   />
// );

// export default PrivateRoute;

import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...theRest }) => {
  netlifyIdentity.on("init");
  // Available after on('init') is invoked
  const user = netlifyIdentity.currentUser();
  return (
    <Route
      {...theRest}
      render={(props) => {
        if (user) {
          return <Component isLoading={props.isLoading} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
