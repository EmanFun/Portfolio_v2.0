"use client";
import React from "react";
import "./globals.css";
import styles from "./layout.module.css";
import ThemeProvider from "@/styles/ThemeProvider";

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.layout}>
          <ThemeProvider>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  );
}

export default Layout;
