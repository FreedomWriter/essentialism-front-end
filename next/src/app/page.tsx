"use client";
import { Homepage } from "@components";
import { useTheme } from "@hooks";
import { GlobalStyles } from "@utils";
import { Button } from "@ui";
import React from "react";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Button onClick={toggleTheme}>Toggle Darkmode</Button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Button onClick={() => console.log("clicked: Default")}>Default</Button>
        <Button
          variant="outline"
          onClick={() => console.log("clicked: Outline")}
        >
          Outline
        </Button>
        <Button variant="ghost" onClick={() => console.log("clicked: Ghost")}>
          Ghost
        </Button>
      </div>
      <GlobalStyles theme={theme} />
      <Homepage />
    </>
  );
}
