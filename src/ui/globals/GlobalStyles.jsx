import { createGlobalStyle } from "styled-components";
import { setFont, setColor } from "./styles";

export const Globals = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap');

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


body {
  ${setFont.main};
  background: ${setColor.offWhite};
  color: ${setColor.mainBlack};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 2em;
  text-rendering: optimizeLegibility;
  margin: 0 auto;
}

h1 {
  font-size: 3em;
  line-height: 1.2;
  margin-bottom: 0.5em;
  color: ${setColor.mainColor};
}

h2 {
  font-size: 1.5em;
  margin-bottom: 0.75em;
  color: ${setColor.mainColor};
}

h3 {
  font-size: 1.5em;
  line-height: 1;
  margin-bottom: 1em;
  color: ${setColor.mainColor};
}

h4{
  font-size: 1em;
  line-height: 1.2;
  margin-bottom: 1em;
  color: ${setColor.mainColor};
}

h5 {
  font-size: 1em;
  margin-bottom: 1.5em;
  font-weight:400;
  color: ${setColor.mainColor};
}

h6 {
  font-size: 1em;
  font-weight:bold;
  color: ${setColor.mainColor};
}

p {
  line-height: 1.5;
  margin: 0 0 1.5 0;
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
