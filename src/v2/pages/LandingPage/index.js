import React from "react";

import { Button } from "v2";

export default function LandingPage() {
  return (
    <>
      <Button>Default</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <p style={{ minHeight: "125vh" }}>LandingPage</p>
    </>
  );
}
