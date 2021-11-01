import LinkNav from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mocknavLinks } from "./mockNaviLinks";

describe("<LinkNav />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<LinkNav {...mocknavLinks} />);
    expect(container).toMatchSnapshot();
  });
  it("should have four links the navigation ", () => {
    renderTheme(<LinkNav {...mocknavLinks} />);
    const linksNavigation = screen.getAllByRole("link");
    expect(linksNavigation).toHaveLength(4);
  });
});
