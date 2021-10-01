import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import React from "react";
import Header from "components/Header";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BlogFólio Henrique dos Santos</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content=" Blog e Portfólio com especificações sobre desenvolvimento web"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header />
          <GlobalStyles />
          <Component {...pageProps} />
        </React.Fragment>
      </ThemeProvider>
    </>
  );
}

export default App;
