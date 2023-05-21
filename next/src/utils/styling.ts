"use client";
import { css } from "styled-components";
export interface ColorScheme {
  background: string;
  font: string;
  primary: string;
  secondary: string;
  tertiary: string;
  error: string;
  success: string;
  warning: string;
  darkBackground: string;
  darkFont: string;
  default: string; // Add this property
}

export const DEFAULT_COLORS: ColorScheme = {
  background: "hsl(210, 15%, 95%)",
  font: "hsl(210, 5%, 20%)",
  primary: "hsl(180, 40%, 50%)",
  secondary: "hsl(240, 30%, 65%)",
  tertiary: "hsl(180, 15%, 85%)",
  error: "hsl(0, 70%, 50%)",
  success: "hsl(120, 40%, 45%)",
  warning: "hsl(45, 80%, 55%)",
  darkBackground: "hsl(210, 5%, 10%)",
  darkFont: "hsl(210, 15%, 80%)",
  default: "hsl(210, 15%, 95%)", // Add this value
};

export const COLORS: ColorScheme = {
  ...DEFAULT_COLORS,
  // Add additional color overrides or customizations here
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
