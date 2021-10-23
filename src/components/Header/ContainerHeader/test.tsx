import ContainerHeader from ".";
import { screen, fireEvent } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import "jest-styled-components";

describe("<ContainerHeader />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<ContainerHeader />);
    expect(container).toMatchSnapshot();
  });
  it("should have childrens in the header ", () => {
    renderTheme(<ContainerHeader />);
    expect(screen.getByText(/web/i)).toBeInTheDocument();
    expect(screen.getByText(/dev/i)).toBeInTheDocument();
  });
  it("should open and close menu with click button ", () => {
    renderTheme(<ContainerHeader />);
    const buttonOpen = screen.getByRole("button", {
      name: /Botão para abrir um menu de opções/i,
    });

    expect(buttonOpen).toBeInTheDocument();

    fireEvent.click(buttonOpen);
    expect(
      screen.getByRole("button", { name: /Botão para fechar um menu/i })
    ).toBeInTheDocument();
  });
});
