import { createContext } from "react";

const themes = {
  light: {
    background: "#000",
    surface: "#fff",
    primary: "#9965f4",
    secondary: "#28bfb4",
    highEmphasizedTextOpacity: "100%",
    mediumEmphasizedTextOpacity: "100%",
    disabledTextOpacity: "100%",
  },
  dark: {
    background: "#000",
    surface: "#121212",
    primary: "#9965f4",
    secondary: "#28bfb4",
    highEmphasizedTextOpacity: "87%",
    mediumEmphasizedTextOpacity: "60%",
    disabledTextOpacity: "38%",
  },
};

const AppThemeContext = createContext([themes.light, (obj) => obj]);

export { AppThemeContext, themes };
