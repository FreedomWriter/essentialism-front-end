"use client";
import { Homepage } from "@components";
import { useTheme } from "@hooks";
import { GlobalStyles } from "@utils";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  let apple;
  return (
    <>
      <button onClick={toggleTheme}>Toggle Darkmode</button>
      <GlobalStyles theme={theme} />
      <Homepage />
    </>
  );
}
