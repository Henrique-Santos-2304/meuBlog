import Heading from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

const props = {
  msg: "teste",
  color: "red",
  padding: "2rem",
  fontSize: "2.4rem",
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
    expect(heading).toHaveStyle({ color: "orange" });
    expect(heading).toHaveStyle({ padding: "1rem" });
    expect(heading).toHaveStyle({ "font-size": "1.6rem" });
  });
  it("should have a style specified in props ", () => {
    renderTheme(<Heading {...props} />);
    const heading = screen.getByRole("heading", {
      name: /teste/i,
    });
    expect(heading).toHaveStyle({ color: "red" });
    expect(heading).toHaveStyle({ padding: "2rem" });
    expect(heading).toHaveStyle({ "font-size": "2.4rem" });
  });
});
