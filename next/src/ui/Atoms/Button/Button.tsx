import React from "react";
import styled from "styled-components";

import { COLORS } from "@utils";
import { ButtonProps, ButtonStyles } from "@types";

const SIZES: ButtonStyles = {
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
  padding: var(--padding);
  border-radius: var(--borderRadius);
  /* We reduced the padding by 4px (vertical and horizontal)
     to accomodate the extra 4px added by the border */
  border: 2px solid transparent;
  cursor: pointer;
  background-color: ${COLORS.primary};
  color: ${COLORS.tertiary};

  &:focus {
    outline-offset: 4px;
    outline-color: ${COLORS.primary};
  }
  &:hover {
    filter: brightness(80%);
  }
`;

const Outline = styled(ButtonBase)`
  background-color: transparent;
  color: ${COLORS.primary};
  border: 2px solid;
`;

const Ghost = styled(ButtonBase)`
  background-color: transparent;
  color: ${COLORS.primary};
  outline-color: ${COLORS.primary};
`;

const COMPONENTS = {
  outline: Outline,
  ghost: Ghost,
};

const Button = ({
  variant,
  size = "small",
  children,
  onClick,
}: ButtonProps) => {
  const styles = { ...SIZES[size] } as React.CSSProperties;

  if (!variant) {
    return (
      <ButtonBase onClick={onClick} style={styles}>
        {children}
      </ButtonBase>
    );
  }
  const Component = COMPONENTS[variant];

  return (
    <Component onClick={onClick} style={styles}>
      {children}
    </Component>
  );
};
export default Button;
