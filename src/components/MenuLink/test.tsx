import MenuLink from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<MenuLink />", () => {
  it("should have a menu on the display ", () => {
    const { container } = renderTheme(<MenuLink isOpen />);
    expect(container).toMatchSnapshot();
  });
  it("should have Links within the menu ", () => {
    renderTheme(<MenuLink isOpen />);

    expect(screen.getByRole("link", { name: /inicio/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /projetos/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sobre/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /habilidades/i })
    ).toBeInTheDocument();
  });
  it("menu should not be visible", () => {
    renderTheme(<MenuLink isOpen={false} />);
    const menu = screen.getByRole("navigation", { hidden: true });
    expect(menu.getAttribute("aria-hidden")).toBe("true");
    expect(menu).toHaveStyle({ opacity: 0 });
  });
  it("should Menu it's visible ", () => {
    renderTheme(<MenuLink isOpen />);
    const menu = screen.getByRole("navigation", { hidden: true });
    expect(menu.getAttribute("aria-hidden")).toBe("false");
    expect(menu).toHaveStyle({ opacity: 1 });
  });
});
