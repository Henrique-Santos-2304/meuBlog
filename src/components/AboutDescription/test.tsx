import AboutDescription from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<AboutDescription />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<AboutDescription />);
    expect(container).toMatchSnapshot();
  });
  it("should have a title section and myDescription text ", () => {
    renderTheme(<AboutDescription />);

    const title = screen.getByRole("heading", {
      name: /um pouco sobre mim/i,
    });

    const myDescription = screen.getByLabelText(
      /Texto com a descrição do Programador/i
    );

    expect(title).toBeInTheDocument();
    expect(myDescription).toBeInTheDocument();
  });
});
