import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import theme from "styles/theme";
import "jest-styled-components";

import Logo from ".";

describe("<Logo />", () => {
  it("create Snapshot for element", () => {
    const { container } = renderTheme(<Logo />);
    expect(container).toMatchSnapshot();
  });
  it("should have a text Web", () => {
    renderTheme(<Logo />);
    expect(screen.getByText(/Web/i)).toBeInTheDocument();
    expect(screen.getByText(/Web/i)).toHaveStyle({ color: theme.colors.white });
  });
  it("should have a text Dev", () => {
    renderTheme(<Logo />);
    expect(screen.getByText(/Dev/i)).toBeInTheDocument();
    expect(screen.getByText(/Dev/i)).toHaveStyle({
      color: theme.colors.red800,
    });
  });
});
