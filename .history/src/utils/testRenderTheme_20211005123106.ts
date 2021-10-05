import { ThemeProvider } from "styled-components";
import { render, RenderResult } from "@testing-library/react";
import theme from "../styles/theme";
export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider>{children}</ThemeProvider> );
};
