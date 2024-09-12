import ThemeProvider from "@/styles/ThemeProvider";
import React from "react";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
