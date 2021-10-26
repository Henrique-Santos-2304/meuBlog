import BoxSkilss from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

const mock = {
  img: "https://res.cloudinary.com/defnibbpl/image/upload/v1634679113/rtl_i3scd8_11f5f28c30.svg",
  title: "Titulo da imagem",
  marginBox: "1rem",
};
describe("<BoxSkilss />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<BoxSkilss {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<BoxSkilss {...mock} />);
    const title = screen.getByRole("heading", { name: /Titulo da imagem/i });
    const image = screen.getByRole("img");
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
