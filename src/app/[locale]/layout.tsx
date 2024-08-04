import ThemeProvider from "@/styles/ThemeProvider";
import React from "react";
import "./globals.css"

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
        <body>
            <ThemeProvider>
                <section>
                    {children}
                </section>
            </ThemeProvider>
        </body>
    </html>
  );
}

export default RootLayout;
