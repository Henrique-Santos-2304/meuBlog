import { screen } from "@testing-library/react";
import "jest-styled-components";
import { renderTheme } from "styles/testRenderTheme";

import Header from ".";

describe("<Header />", () => {
  it("should render Header", () => {
    renderTheme(<Header />);

    expect(
      screen.getByRole("heading", { name: /Henrique dos Santos/i })
    ).toBeInTheDocument();
  });
});
