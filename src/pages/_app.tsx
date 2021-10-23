import React from "react";
import { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import { useApollo } from "utils/apollo";

import GlobalStyles from "styles/global";
import theme from "styles/theme";
import ContainerHeader from "components/Header/ContainerHeader";

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <ContainerHeader />
          <Component {...pageProps} />
          <Container
            maxW="full"
            h="6vh"
            bgGradient="linear(to-l,#00bf72 ,#008793 ,#004d7a , #051937)"
          />
        </ChakraProvider>
        <GlobalStyles />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
