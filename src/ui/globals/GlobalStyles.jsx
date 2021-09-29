import { createGlobalStyle } from "styled-components";
import { setFont, setColor } from "./styles";

export const Globals = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap');

* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}


body {
  ${setFont.main};
  background: ${setColor.offWhite};
  color: ${setColor.mainColor};
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
a {
  text-decoration: none;
}


`;
