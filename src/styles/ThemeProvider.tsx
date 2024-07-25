"use client";
import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import theme from "./theme";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
