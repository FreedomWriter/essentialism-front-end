"use client";
import { ColorScheme } from "@types";
import { css } from "styled-components";

export const COLORS: ColorScheme = {
  background: "hsl(210, 15%, 95%)",
  font: "hsl(210, 5%, 20%)",
  primary: "hsl(180, 40%, 35%)",
  secondary: "hsl(240, 30%, 60%)",
  tertiary: "hsl(180, 15%, 85%)",
  error: "hsl(0, 70%, 50%)",
  success: "hsl(120, 40%, 45%)",
  warning: "hsl(45, 80%, 55%)",
  darkBackground: "hsl(210, 5%, 10%)",
  darkFont: "hsl(210, 15%, 80%)",
  default: "hsl(210, 15%, 95%)",
};

const sizes = {
  large: 990,
  medium: 800,
  small: 500,
};

type MediaQueryFunction = (
  ...args: Parameters<typeof css>
) => ReturnType<typeof css>;

export const media: Record<string, MediaQueryFunction> = Object.keys(
  sizes
).reduce<Record<string, MediaQueryFunction>>((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label as keyof typeof sizes]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
