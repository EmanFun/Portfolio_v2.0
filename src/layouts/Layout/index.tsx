import type { Metadata } from "next";
import React from "react";
import styles from "./styles.module.css";
import { ContactComponent, HeaderComponent } from "@/components";

export const metadata: Metadata = {
  title: "Emanuel Funes Cv",
  description: "Emanuel Funes Portfolio",
};

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <HeaderComponent />
      </header>
      <aside className={styles.aside}>
        <ContactComponent/>
      </aside>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

export default Layout;
