/* eslint-disable @typescript-eslint/no-non-null-assertion */
import MenuNav from ".";
import { fireEvent, screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockMenuNav } from "./mockMenuNav";

describe("<MenuNav />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<MenuNav {...mockMenuNav} />);
    expect(container).toMatchSnapshot();
  });
  it("should have items of the navigation menu ", () => {
    renderTheme(<MenuNav {...mockMenuNav} />);

    const buttonToogleMenu = screen.getByLabelText(
      /Botão de abrir e fechar menu de navegação/i
    );
    const navigation = screen.getByRole("navigation");
    const contentNavigation = screen.getByLabelText(
      /Menu de nagação de telas/i
    );
    expect(buttonToogleMenu).toBeInTheDocument();
    expect(navigation).toBeInTheDocument();
    expect(contentNavigation).toBeInTheDocument();
  });
  it("should handle menu with click in the button ", () => {
    renderTheme(<MenuNav {...mockMenuNav} />);

    const buttonToogleMenu = screen.getByLabelText(
      /Botão de abrir e fechar menu de navegação/i
    );
    const navigation = screen.queryByRole("navigation");
    const contentNavigation = screen.getByLabelText(
      /Menu de nagação de telas/i
    );

    expect(contentNavigation).toHaveStyle({ width: "35rem", opacity: "0" });

    expect(navigation).toHaveStyle({ opacity: "0" });
    expect(buttonToogleMenu).toHaveStyle({ background: "rgba(0, 0, 0, 0.65)" });

    fireEvent.click(buttonToogleMenu);
    expect(contentNavigation).toHaveStyle({ width: "100vw", opacity: "1" });
    expect(navigation).toHaveStyle({ opacity: "1" });
    expect(buttonToogleMenu).toHaveStyle({ background: "transparent" });

    fireEvent.click(contentNavigation!);
    expect(contentNavigation).toHaveStyle({ width: "35rem", opacity: "0" });
    expect(navigation).toHaveStyle({ opacity: "0" });
    expect(buttonToogleMenu).toHaveStyle({ background: "rgba(0, 0, 0, 0.65)" });
  });
});
