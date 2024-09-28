import ThemeProvider from "@/styles/ThemeProvider";
import React from "react";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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
            <ThemeProvider>{children}</ThemeProvider>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
