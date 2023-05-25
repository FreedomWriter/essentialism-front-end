import "@testing-library/jest-dom/extend-expect";
import "jest-axe/extend-expect";

import { axe } from "jest-axe";
import React from "react";
import { render } from "@testing-library/react";
import { GlobalStyles } from "../GlobalStyles";
import { useTheme } from "./helper-tests/constants";

const AllTheProviders = ({ children }) => {
  return (
    <>
      <GlobalStyles theme={useTheme()} />
      {children}
    </>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render, axe };
