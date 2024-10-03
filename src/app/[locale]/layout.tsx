import ThemeProvider from "@/styles/ThemeProvider";
import React from "react";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LayoutLanding } from "@/styles/common";
import '@/styles/globals.css';

async function RootLayout({
  children,
  params: { locale },
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <LayoutLanding>
          <NextIntlClientProvider messages={messages}>
            <StyledComponentsRegistry>
              <ThemeProvider>{children}</ThemeProvider>
            </StyledComponentsRegistry>
          </NextIntlClientProvider>
        </LayoutLanding>
      </body>
    </html>
  );
}

export default RootLayout;
