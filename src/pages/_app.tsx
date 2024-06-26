import React from "react";
import "@/assets/css/globals.css";



interface MyApp {
  Component: React.ComponentType<any>;
  pageProps: Record<string, any>;
}

const MyApp = ({ Component, pageProps }: MyApp) => {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
};

export default MyApp;
