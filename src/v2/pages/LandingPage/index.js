import React from "react";
import { auth } from "v2/utils";

export default function LandingPage() {
  console.log({ auth });
  return (
    <>
      <p>Issa proccess: {process.env.REACT_APP_NETLIFY_DOMAIN}</p>
      <div>LandingPage</div>
    </>
  );
}
