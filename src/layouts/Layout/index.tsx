import type { Metadata } from "next";
import React from "react";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Emanuel Funes Cv",
  description: "Emanuel Funes Portfolio",
};

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <header></header>
      <aside></aside>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}

export default Layout;
