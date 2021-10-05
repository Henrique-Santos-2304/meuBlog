import { screen, waitFor } from "@testing-library/react";
import "jest-styled-components";
import theme from "styles/theme";
import { renderTheme } from "utils/testRenderTheme";

import Main from ".";

describe("<Main />", () => {
  it("should render the heading", () => {
    renderTheme(<Main />);

    expect(
      screen.getByRole("heading", { name: /Henrique dos Santos/i })
    ).toBeInTheDocument();
  });

  it("should render the colors correctly", () => {
    renderTheme(<Main />);

    const headingDisplay = screen.getByRole("heading", {
      name: /Henrique dos Santos/i,
    }).parentElement;

    expect(headingDisplay).toHaveStyle({
      background: theme.colors.black800,
    });
    expect(headingDisplay).toMatchSnapshot();
  });

  it("should show the effect description", async () => {
    renderTheme(<Main />);

    await waitFor(
      () => expect(screen.getByText(/Desenvolvedor Web/i)).toBeInTheDocument(),
      { timeout: 3000 }
    );
  });
});
