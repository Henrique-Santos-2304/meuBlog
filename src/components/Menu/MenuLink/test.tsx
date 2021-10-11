import MenuLink from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<MenuLink />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<MenuLink />);
    expect(container).toMatchSnapshot();
  });
  it("should render Navigation and links ", () => {
    renderTheme(<MenuLink />);
    const navigation = screen.getByRole("navigation", { hidden: true });
    expect(navigation).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /inicio/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /projetos/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /sobre/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /contato/i,
      })
    ).toBeInTheDocument();
  });
});
