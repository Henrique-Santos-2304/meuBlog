import Heading from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

const props = {
  msg: "teste",
  colorText: "red",
  paddingText: "2rem",
  fontSizeText: "2.4rem",
  marginText: "1rem",
};
describe("<Heading />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Heading {...props} />);
    expect(container).toMatchSnapshot();
  });
  it("should have a title specified in props ", () => {
    renderTheme(<Heading {...props} />);
    expect(
      screen.getByRole("heading", {
        name: /teste/i,
      })
    ).toBeInTheDocument();
  });
  it("should have a style default  ", () => {
    renderTheme(<Heading msg="teste" />);
    const heading = screen.getByRole("heading", {
      name: /teste/i,
    });
    expect(heading).toHaveStyle({ color: "#f8f8f8" });
    expect(heading).toHaveStyle({ padding: 0 });
    expect(heading).toHaveStyle({ "font-size": "1.4rem" });
    expect(heading).toHaveStyle({ margin: 0 });
  });
  it("should have a style specified in props ", () => {
    renderTheme(<Heading {...props} />);
    const heading = screen.getByRole("heading", {
      name: /teste/i,
    });
    expect(heading).toHaveStyle({ color: "red" });
    expect(heading).toHaveStyle({ padding: "2rem" });
    expect(heading).toHaveStyle({ "font-size": "2.4rem" });
    expect(heading).toHaveStyle({ margin: "1rem" });
  });
});
