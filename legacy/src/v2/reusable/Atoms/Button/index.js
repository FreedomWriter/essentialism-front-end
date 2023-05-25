import React from "react";
import styled from "styled-components";

import { COLORS } from "v2/utils";

const SIZES = {
  small: {
    "--borderRadius": `${4}px`,
    "--fontSize": `${16 / 16}rem`,
    "--padding": "4px 14px",
  },
  medium: {
    "--borderRadius": `${4}px`,
    "--fontSize": `${18 / 16}rem`,
    "--padding": "12px 20px",
  },
  large: {
    "--borderRadius": `${4}px`,
    "--fontSize": `${24 / 16}rem`,
    "--padding": "16px 32px",
  },
};

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: "Roboto" sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  /* We reduced the padding by 4px (vertical and horizontal)
     to accomodate the extra 4px added by the border */
  border: 2px solid transparent;
  cursor: pointer;

  &:focus {
    outline-offset: 4px;
    outline-color: ${COLORS.primary};
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.light};
  }
`;
const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;
  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(ButtonBase)`
  background-color: transparent;
  color: ${COLORS.gray};
  outline-color: ${COLORS.gray};

  &:hover {
    background-color: ${COLORS.transparentGray15};
  }
`;
const Button = ({ variant = "fill", size = "medium", children, onClick }) => {
  const styles = SIZES[size];

  let Component;

  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }
  if (variant === "ghost") {
    Component = GhostButton;
  }
  return (
    <Component onClick={onClick} style={styles}>
      {children}
    </Component>
  );
};
export default Button;
