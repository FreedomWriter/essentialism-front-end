"use client";
import { Homepage } from "@components";
import { useTheme } from "@hooks";
import { GlobalStyles } from "@utils";
import React from "react";

export default function App() {
  const [theme] = useTheme();

  return (
    <>
      <GlobalStyles theme={theme} />
      <Homepage />
    </>
  );
}
