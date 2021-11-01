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
    const image1 = screen.getByRole("img", {
      name: /logo da foto1/i,
      hidden: true,
    });
    const image2 = screen.getByRole("img", {
      name: /logo da foto2/i,
      hidden: true,
    });
    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
  });
});
