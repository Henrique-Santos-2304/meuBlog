import Buttons from ".";
import { renderTheme } from "utils/testRenderTheme";
import { fireEvent, screen } from "@testing-library/react";
import { mockButtons } from "./mockButtonsProps";

describe("<Buttons />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Buttons {...mockButtons} />);
    expect(container).toMatchSnapshot();
  });
  it("should have two button to view full project ", () => {
    renderTheme(<Buttons {...mockButtons} />);
    expect(
      screen.getByRole("button", { name: /ver projeto/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /ver código/i })
    ).toBeInTheDocument();
  });
  it("should function to have been called with click button", () => {
    renderTheme(<Buttons {...mockButtons} />);
    fireEvent.click(screen.getByRole("button", { name: /ver projeto/i }));
    expect(mockButtons.onOpen).toHaveBeenCalled();
  });
});
