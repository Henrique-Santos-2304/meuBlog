import Logo from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<Logo />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Logo />);
    expect(container).toMatchSnapshot();
  });
  it("should logo text in the display ", () => {
    renderTheme(<Logo />);
    expect(screen.getByLabelText(/logo dev/i)).toBeInTheDocument();
  });
  it("should have a text Web Dev  ", () => {
    renderTheme(<Logo />);
    expect(screen.getByText(/web/i)).toBeInTheDocument();
    expect(screen.getByText(/dev/i)).toBeInTheDocument();
  });
});
