export const darkMode = {
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
export const lightMode = {
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
export const useTheme = (theme = "dark") => {
  if (theme === "dark") {
    return darkMode;
  }
  if (theme === "light") {
    return lightMode;
  }
};
