import AboutDescription from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

const mock = {
  title: "seção1",
  descriprions: "Descrição da seção",
};
describe("<AboutDescription />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<AboutDescription {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it("should have a title section and myDescription text ", () => {
    renderTheme(<AboutDescription {...mock} />);

    const title = screen.getByRole("heading", {
      name: /seção1/i,
    });

    const myDescription = screen.getByLabelText(
      /Texto com a descrição do Programador/i
    );

    expect(title).toBeInTheDocument();
    expect(myDescription).toBeInTheDocument();
  });
});
