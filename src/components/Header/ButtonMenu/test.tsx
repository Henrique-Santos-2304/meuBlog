import ButtonMenu from ".";
import { screen } from "@testing-library/react";

import { renderTheme } from "utils/testRenderTheme";

describe("<ButtonMenu />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<ButtonMenu />);
    expect(container).toMatchSnapshot();
  });
  it("should button visible in the display", () => {
    renderTheme(<ButtonMenu />);
    expect(screen.getByRole("button", { hidden: true })).toBeInTheDocument();
  });
});
