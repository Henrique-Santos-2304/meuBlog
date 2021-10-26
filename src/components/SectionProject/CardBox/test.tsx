import CardBox from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<CardBox />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<CardBox />);
    expect(container).toMatchSnapshot();
  });
  it("should have a title,image,and buttons of the project ", () => {
    renderTheme(<CardBox />);
    const title = screen.getByRole("heading");
    const image = screen.getByRole("img");
    const buttons = screen.getAllByRole("button");

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
  });
});
