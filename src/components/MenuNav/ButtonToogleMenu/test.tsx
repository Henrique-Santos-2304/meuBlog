import ButtonToogleMenu from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<ButtonToogleMenu />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<ButtonToogleMenu menuVisible={false} />);
    expect(container).toMatchSnapshot();
  });
  it("should have button Open menu and not have button close menu with menu not visible ", () => {
    renderTheme(<ButtonToogleMenu menuVisible={false} />);
    const buttonOpenmenu = screen.getByRole("button", {
      name: /botão para abrir o menu/i,
    });
    const buttonCloseMenu = screen.queryByRole("button", {
      name: /Botão Para fechar o Menu/i,
    });
    expect(buttonOpenmenu).toBeInTheDocument();
    expect(buttonCloseMenu).not.toBeInTheDocument();
  });
  it("should have button close menu and not have button open menu with menu  visible ", () => {
    renderTheme(<ButtonToogleMenu menuVisible={true} />);
    const buttonOpenmenu = screen.queryByRole("button", {
      name: /botão para abrir o menu/i,
    });
    const buttonCloseMenu = screen.getByRole("button", {
      name: /Botão Para fechar o Menu/i,
    });
    expect(buttonOpenmenu).not.toBeInTheDocument();
    expect(buttonCloseMenu).toBeInTheDocument();
  });
});
