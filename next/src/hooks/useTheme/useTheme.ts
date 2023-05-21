import React, { useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import { ColorScheme, COLORS } from "../../utils/styling";

export interface CustomTheme extends DefaultTheme, ColorScheme {}

const lightTheme: CustomTheme = {
  ...COLORS,
  default: COLORS.background,
};

const darkTheme: CustomTheme = {
  ...COLORS,
  background: COLORS.darkBackground,
  font: COLORS.darkFont,
  default: COLORS.darkBackground,
};

const useTheme = (): [CustomTheme, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState<CustomTheme>(lightTheme);

  const toggleTheme = React.useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  useEffect(() => {
    const prefersDarkMode =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    const selectedTheme = isDarkMode ? darkTheme : lightTheme;
    setTheme(selectedTheme);
  }, [isDarkMode]);

  return [theme, toggleTheme];
};

export default useTheme;
