import BoxSkilss from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockBoxSkill } from "./mockBoxSkilss";

describe("<BoxSkilss />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<BoxSkilss {...mockBoxSkill} />);
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<BoxSkilss {...mockBoxSkill} />);
    const title = screen.getByRole("heading", { name: /Titulo da imagem/i });
    const image = screen.getByRole("img");
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
