import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="My Boyllerplate/ Template for Projects React | Next.js"
        />
      </Head>

      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
