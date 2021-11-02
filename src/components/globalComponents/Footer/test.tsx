import Footer from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockFooter } from "./mockFooter";

describe("<Footer />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Footer {...mockFooter} />);
    expect(container).toMatchSnapshot();
  });
  it("should have the content links ", () => {
    renderTheme(<Footer {...mockFooter} />);
    const contentLinks = screen.getByLabelText(
      /links para contatos e portfolio/i
    );
    expect(contentLinks).toBeInTheDocument();
  });
});
