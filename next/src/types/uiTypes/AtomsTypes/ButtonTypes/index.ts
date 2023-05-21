import { ReactNode } from "react";

type ButtonVariantTypes = "outline" | "ghost";
type ButtonSizeVariantTypes = "small" | "medium" | "large";

export interface ButtonStyleTypes {
  "--borderRadius": string;
  "--fontSize": string;
  "--padding": string;
}

export interface ButtonStyles {
  small: ButtonStyleTypes;
  medium: ButtonStyleTypes;
  large: ButtonStyleTypes;
}

export interface ButtonProps {
  variant?: ButtonVariantTypes;
  size?: ButtonSizeVariantTypes;
  children: ReactNode;
  onClick: () => void;
}
