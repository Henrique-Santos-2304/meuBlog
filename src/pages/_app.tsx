import { AppProps } from "next/app";
import GlobalStyles from "styles/global";
import { ChakraProvider } from "@chakra-ui/react";

import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import React from "react";
import ContainerHeader from "components/Header/ContainerHeader";
import Footer from "components/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <ContainerHeader />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
