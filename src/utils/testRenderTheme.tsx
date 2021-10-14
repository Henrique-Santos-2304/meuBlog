import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

import { render, RenderResult } from "@testing-library/react";
import theme from "styles/theme";
export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(
    <ThemeProvider theme={theme}>
      <ChakraProvider> {children}</ChakraProvider>
    </ThemeProvider>
  );
};
