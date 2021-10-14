import { RouterContext } from "next/dist/shared/lib/router-context";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "styles/theme";

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      </ChakraProvider>
    </>
  ),
];
