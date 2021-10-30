import Header from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<Header />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Header />);
    expect(container).toMatchSnapshot();
  });
  it("should have a Logo and button Menu  ", () => {
    renderTheme(<Header />);
    const preText = screen.getByText(/web/i);
    const proText = screen.getByText(/dev/i);

    const buttonMenu = screen.getByRole("button", {
      name: /Botão Para abrir o Menu/i,
    });

    expect(preText).toBeInTheDocument();
    expect(proText).toBeInTheDocument();
    expect(buttonMenu).toBeInTheDocument();
  });
});
