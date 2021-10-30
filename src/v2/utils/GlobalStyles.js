import { createGlobalStyle } from "styled-components";
import { COLORS } from "./styling";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

#root {
  min-height: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

body {
  font-family: 'Lato', open-sans;
  background: ${COLORS.white};
  color: ${COLORS.black};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  margin: 0 auto;
}

.clearfix {
  zoom: 1;
}
.clearfix:after {
  content: "_";
  clear: both;
  display: block;
  height: 0;
  visibility: hidden;
}
`;
