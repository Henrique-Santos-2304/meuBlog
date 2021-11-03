import "match-media-mock";
import SliderPhoto from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockSlides } from "./mockSlides";

describe("<SliderPhoto />", () => {
  it("should have cards slides ", () => {
    const { container } = renderTheme(
      <SliderPhoto {...mockSlides} receptorCards="skilss" />
    );
    expect(container).toMatchSnapshot();
  });
  it("should have cards slides ", () => {
    renderTheme(<SliderPhoto {...mockSlides} receptorCards="skilss" />);
    const images = screen.getByRole("img");
    expect(images).toBeInTheDocument();
  });
});
