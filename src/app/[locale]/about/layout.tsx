import React from "react";
import "../globals.css";
import styles from "./layout.module.css";
import ThemeProvider from "@/styles/ThemeProvider";
import { ContactComponent, NavComponent } from "@/components";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

async function Layout({
  children,
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        <section className={styles.layout}>
          <section className={styles.nav}>
            <NavComponent />
          </section>
          <section className={styles.main}>{children}</section>
          <section className={styles.footer}>
            <ContactComponent />
          </section>
        </section>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

export default Layout;
