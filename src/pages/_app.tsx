import React from "react";
import { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { useApollo } from "utils/apollo";

import GlobalStyles from "styles/global";
import theme from "styles/theme";
import ContainerHeader from "components/Header/ContainerHeader";
import Footer from "components/globalComponents/Footer";

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <ContainerHeader />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
        <GlobalStyles />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
