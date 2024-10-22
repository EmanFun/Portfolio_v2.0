import ThemeProvider from "@/styles/ThemeProvider";
import React from "react";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/styles/globals.css";
import { NavProvider } from "@/hooks";

async function RootLayout({
  children,
  params: { locale },
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <StyledComponentsRegistry>
            <NavProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </NavProvider>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
