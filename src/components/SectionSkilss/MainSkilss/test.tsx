import "match-media-mock";
import SectionSkilss from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockSkilss } from "./mockSkilss";

describe("<SectionSkilss />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<SectionSkilss {...mockSkilss} />);
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<SectionSkilss {...mockSkilss} />);

    const title = screen.getByRole("heading", {
      name: /minhas habilidades/i,
    });

    expect(title).toBeInTheDocument();
  });
});
