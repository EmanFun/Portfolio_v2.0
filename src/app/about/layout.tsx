"use client";
import React from "react";
import "../globals.css";
import styles from "./layout.module.css";
import ThemeProvider from "@/styles/ThemeProvider";
import dynamic from "next/dynamic";

const DynamicContactComponent = dynamic(
  () => import("@/components/ContactComponent"),
  { ssr: false }
);
const DynamicNavComponent = dynamic(() => import("@/components/NavComponent"), {
  ssr: false,
});

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <section className={styles.layout}>
            <section className={styles.nav}>
              <DynamicNavComponent />
            </section>
            <section className={styles.main}>{children}</section>
            <section className={styles.footer}>
              <DynamicContactComponent />
            </section>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default Layout;
