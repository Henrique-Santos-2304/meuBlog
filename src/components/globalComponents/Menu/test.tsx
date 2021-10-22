import Menu from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<Menu />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Menu isOpen onClose={() => false} />);
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<Menu isOpen onClose={() => false} />);
    const navigation = screen.getByRole("navigation", { hidden: true });
    expect(navigation).toBeInTheDocument();
  });
});
