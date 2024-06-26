import React from "react";
import "../app/globals.css";

interface AppProps {
  Component: React.ComponentType;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
