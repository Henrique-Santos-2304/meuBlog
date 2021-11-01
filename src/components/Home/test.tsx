import { renderTheme } from "utils/testRenderTheme";
import { screen } from "@testing-library/react";
import Header from ".";
import { mockHome } from "./mockHome";

describe("Header", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Header {...mockHome} />);
    expect(container).toMatchSnapshot();
  });
  it("should my Description and photo ", () => {
    renderTheme(<Header {...mockHome} />);
    const apresentation = screen.getByTestId(/apresentation/i);
    const name = screen.getByText(/henrique/i);
    const myImage = screen.getByRole("img", {
      name: /Foto do Desenvolvedor dono do Portfólio/i,
    });

    expect(apresentation).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(myImage).toBeInTheDocument();
  });
});
