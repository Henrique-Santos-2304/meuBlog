import { ThemeProvider } from "styled-components";
import { render, RenderResult } from "@testing-library/react";
import theme from "../styles/theme";
export const renderTheme = (children: React.ReactElement): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider> );
};
