import { css, keyframes } from "styled-components";

export const setFlex = ({ x = "center", y = "center" } = {}) =>
  `display:flex;align-items:${y};justify-content:${x}`;
export const setBackground = ({
  img = "https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  color = "rgba(0,0,0,0)",
} = {}) => `background: linear-gradient(${color}, ${color}),
    url(${img}) center/cover fixed no-repeat`;
export const setColor = {
  main: "#3d4566",
  white: "#eaeaea",
  light: "#6b79b3",
  black: "#222",
  error: "#FF3344",
};

// main in App.js for Loader

export const setFont = {
  main: "font-family: 'Lato', open-sans;",
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
