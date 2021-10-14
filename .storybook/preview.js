import { RouterContext } from "next/dist/shared/lib/router-context";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "@chakra-ui/theme";

import theme from "styles/theme";

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={myTheme}>
          <GlobalStyles />
          <Story />
        </ChakraProvider>
      </ThemeProvider>
    </>
  ),
];
