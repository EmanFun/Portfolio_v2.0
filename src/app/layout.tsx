import ThemeProvider from "@/styles/ThemeProvider";
import React from "react";


function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
        <body>
            <ThemeProvider>
                <section style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    {children}
                </section>
            </ThemeProvider>
        </body>
    </html>
  );
}

export default Layout;
