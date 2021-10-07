import MenuLink from ".";
// import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<MenuLink />", () => {
  it("should Menu it's in the display ", () => {
    const { container } = renderTheme(<MenuLink isOpen />);
    expect(container).toMatchSnapshot();
  });
  // it("should Menu it's visible ", () => {
  //   renderTheme(<MenuLink isOpen />);
  //   const menu = screen.getByTestId("menuLinks");
  //   expect(menu.getAttribute("aria-hidden")).toBe("false");
  // });
  // it("should Menu it's visible ", () => {
  //   renderTheme(<MenuLink isOpen={false} />);
  //   const menu = screen.getByTestId("menuLinks");
  //   expect(menu.getAttribute("aria-hidden")).toBe("false");
  // });
});
