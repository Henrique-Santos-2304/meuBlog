import { renderTheme } from "utils/testRenderTheme";
import { screen, fireEvent } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Header />);
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<Header />);

    // screen.logTestingPlaygroundURL();
    const menuNav = screen.getByRole("navigation", { hidden: true });
    const button = screen.getByRole("button", { hidden: true });
    expect(button).toBeInTheDocument();
    expect(menuNav.getAttribute("aria-hidden")).toBe("true");
    expect(menuNav).toHaveStyle({ opacity: 0 });

    fireEvent.click(button);
    expect(menuNav.getAttribute("aria-hidden")).toBe("false");
    expect(menuNav).toHaveStyle({ opacity: 1 });
  });
});
