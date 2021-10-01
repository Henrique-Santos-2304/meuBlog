import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Component {...pageProps} />
          <GlobalStyles />
        </React.Fragment>
      </ThemeProvider>
    </>
  );
}

export default App;
