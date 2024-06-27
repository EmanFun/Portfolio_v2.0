import React from "react";
import Head from 'next/head';
import "@/assets/css/globals.css";



interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: Record<string, any>;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return (
    <React.StrictMode>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Other meta tags and link elements can be added here */}
      </Head>
      <Component {...pageProps} />
    </React.StrictMode>
  );
};

export default MyApp;
