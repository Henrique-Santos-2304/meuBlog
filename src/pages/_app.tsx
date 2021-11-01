import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { useApollo } from "utils/apollo";

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
