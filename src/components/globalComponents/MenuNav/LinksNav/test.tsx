import LinkNav from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<LinkNav />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<LinkNav />);
    expect(container).toMatchSnapshot();
  });
  it("should have four links the navigation ", () => {
    renderTheme(<LinkNav />);
    const linksNavigation = screen.getAllByRole("link");
    expect(linksNavigation).toHaveLength(4);
  });
});
