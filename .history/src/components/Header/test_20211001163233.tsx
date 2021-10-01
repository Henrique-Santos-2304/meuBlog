import { screen } from "@testing-library/react";
import "jest-styled-components";
import { renderTheme } from "styles/testRenderTheme";

import Header from ".";

describe("<Main />", () => {
  it("should render the heading", () => {
    renderTheme(<Header />);

    expect(
      screen.getByRole("heading", { name: /Henrique dos Santos/i })
    ).toBeInTheDocument();
  });
});
