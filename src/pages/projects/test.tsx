import "match-media-mock";
import { screen } from "@testing-library/react";
import SectionProject from ".";
import { renderTheme } from "utils/testRenderTheme";
import { mockTypesProject } from "./mockTypes";

describe("<SectionProject />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<SectionProject {...mockTypesProject} />);
    expect(container).toMatchSnapshot();
  });
  it("should have title of the page  ", () => {
    renderTheme(<SectionProject {...mockTypesProject} />);
    expect(
      screen.getByRole("heading", {
        name: /meus projetos/i,
      })
    ).toBeInTheDocument();
  });
});
