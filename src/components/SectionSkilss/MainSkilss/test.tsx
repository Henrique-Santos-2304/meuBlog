import "match-media-mock";
import SectionSkilss from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<SectionSkilss />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<SectionSkilss />);
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<SectionSkilss />);

    const title = screen.getByRole("heading", {
      name: /minhas habilidades/i,
    });

    expect(title).toBeInTheDocument();
  });
});
