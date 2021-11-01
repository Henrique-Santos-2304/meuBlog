import CardBox from ".";

import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockBoxSkill } from "components/SectionSkilss/BoxSkilss/mockBoxSkilss";

describe("<CardBox />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<CardBox {...mockBoxSkill} />);
    expect(container).toMatchSnapshot();
  });
  it("should have a title,image,and buttons of the project ", () => {
    renderTheme(<CardBox {...mockBoxSkill} />);
    const title = screen.getByRole("heading");
    const image = screen.getByRole("img");
    const buttons = screen.getByRole("button");

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(buttons).toBeInTheDocument();
  });
});
