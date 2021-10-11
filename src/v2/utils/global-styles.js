import { createGlobalStyle } from "styled-components";
import { setFont, setColor } from "./styling";

export const Globals = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

html {
  font-size: 62.5%;
}

body {
  ${setFont.main};
  background: ${setColor.white};
  color: ${setColor.black};
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
