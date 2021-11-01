import Header from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockHeader } from "./mockHeader";

describe("<Header />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Header {...mockHeader} />);
    expect(container).toMatchSnapshot();
  });
  it("should have a Logo and button Menu  ", () => {
    renderTheme(<Header {...mockHeader} />);
    const preText = screen.getByText(/web/i);
    const proText = screen.getByText(/dev/i);
    const image = screen.getByRole("img");

    expect(preText).toBeInTheDocument();
    expect(proText).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
