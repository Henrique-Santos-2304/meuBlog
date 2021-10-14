import { renderTheme } from "utils/testRenderTheme";
import { screen } from "@testing-library/react";
import Main from ".";

describe("Main", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Main />);
    expect(container).toMatchSnapshot();
  });
  it("should have column with specified width", () => {
    renderTheme(<Main />);
    expect(
      screen.getByLabelText("Inicio com apresentação de um desenvolvedor Web")
    ).toBeInTheDocument();
  });
});
