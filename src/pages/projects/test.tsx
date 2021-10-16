import "match-media-mock";
import { screen } from "@testing-library/react";
import SectionProject from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<SectionProject />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<SectionProject />);
    expect(container).toMatchSnapshot();
  });
  it("should have title of the page  ", () => {
    renderTheme(<SectionProject />);
    expect(
      screen.getByRole("heading", {
        name: /meus projetos/i,
      })
    ).toBeInTheDocument();
  });
});
