import ThemeProvider from "styled-components";
import { render } from "@testing-library/react";
import { theme } from "./theme";
//eslint-disable
export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
