import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import "jest-styled-components";

import Main from ".";

describe("<Main />", () => {
  it("should render the heading", () => {
    renderTheme(<Main />);

    expect(screen.getByRole("heading", { name: /Oi/i })).toBeInTheDocument();
  });
});
