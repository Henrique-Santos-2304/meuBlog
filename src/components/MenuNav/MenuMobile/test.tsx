/* eslint-disable @typescript-eslint/no-non-null-assertion */
import MenuNav from ".";
import { fireEvent, screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<MenuNav />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<MenuNav />);
    expect(container).toMatchSnapshot();
  });
  it("should have items of the navigation menu ", () => {
    renderTheme(<MenuNav />);

    const buttonToogleMenu = screen.getByLabelText(
      /Botão de abrir e fechar menu de navegção/i
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
    renderTheme(<MenuNav />);

    const buttonToogleMenu = screen.getByLabelText(
      /Botão de abrir e fechar menu de navegção/i
    );
    const navigation = screen.queryByRole("navigation");
    const contentNavigation = screen.getByLabelText(
      /Menu de nagação de telas/i
    );
    expect(contentNavigation).toHaveStyle({ height: "0", right: "-32rem" });
    expect(navigation).toHaveStyle({ opacity: "0" });

    fireEvent.click(buttonToogleMenu);
    expect(contentNavigation).toHaveStyle({ height: "76vh", right: "0" });
    expect(navigation).toHaveStyle({ opacity: "1" });

    fireEvent.click(navigation!);
    expect(contentNavigation).toHaveStyle({ height: "0", right: "-32rem" });
    expect(navigation).toHaveStyle({ opacity: "0" });
  });
});
