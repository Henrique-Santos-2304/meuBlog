import CardBox from ".";

import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

const mockImage = {
  title: "LeScone",
  img: "https://res.cloudinary.com/defnibbpl/image/upload/v1634678383/Lescone_9fb07ad59b.gif",
  buttonCode: "https://github.com/Henrique-Santos-2304/Restaurante-LeScone",
};
describe("<CardBox />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<CardBox {...mockImage} />);
    expect(container).toMatchSnapshot();
  });
  it("should have a title,image,and buttons of the project ", () => {
    renderTheme(<CardBox {...mockImage} />);
    const title = screen.getByRole("heading");
    const image = screen.getByRole("img");
    const buttons = screen.getAllByRole("button");

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
  });
});
