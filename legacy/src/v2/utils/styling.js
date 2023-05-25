import { css, keyframes } from "styled-components";

export const COLORS = {
  primary: "	hsl(228, 25%, 32%)",
  white: "hsl(0, 0%, 92%)",
  light: "hsl(228, 32%, 56%)",
  black: "hsl(0, 0%, 13%)",
  error: "hsl(355, 100%, 60%)",
  offwhite: "hsl(235deg 85% 97%)",
  gray: "hsl(240deg 10% 50%)",
  transparentGray15: "hsl(240deg 10% 50% / 0.15)",
  transparentGray75: "hsl(240deg 10% 50% / 0.75)",
};

export const setShadow = {
  light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)",
  dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);",
  darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);",
};

const sizes = {
  large: 990,
  medium: 800,
  small: 500,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => `transition:${property} ${time} ${timing}`;

export const fadeIn = (start, point, end) => {
  const animation = keyframes`
0%{
 opacity:0;
 transform:translateY(${start})
}
50%{
 opacity:0.5;
 transform:translateY(${point})
}
100%{
 opacity:1;
 transform:translateY(${end})
}
`;
  return css`
    animation: ${animation} 3s ease-in-out;
  `;
};
