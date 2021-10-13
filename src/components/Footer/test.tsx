import Footer from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<Footer />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Footer />);
    expect(container).toMatchSnapshot();
  });
  it("should have a Created By Description ", () => {
    renderTheme(<Footer />);
    expect(screen.getByText(/criado por/i)).toBeInTheDocument();
    expect(screen.getByText(/henrique dos santos/i)).toBeInTheDocument();
  });
});
