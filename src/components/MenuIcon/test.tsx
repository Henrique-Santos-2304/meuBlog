// import { screen } from "@testing-library/react";
import React from "react";
import { renderTheme } from "utils/testRenderTheme";
import { screen } from "@testing-library/react";
import "jest-styled-components";

import MenuIcon from ".";

describe("<Teste />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<MenuIcon check={false} />);

    expect(container).toMatchSnapshot();
  });
  it("should change style with event hover element ", () => {
    renderTheme(<MenuIcon check={false} />);
    const buttonIcon = screen.getByRole("button", { hidden: true });
    expect(buttonIcon).toHaveStyle({
      width: "4.125rem",
      height: "4.125rem",
      transition: "0.2s linear",
    });

    expect(buttonIcon).toHaveStyleRule("width", "4.65rem", {
      modifier: ":hover",
    });
    expect(buttonIcon).toHaveStyleRule("height", "4.65rem", {
      modifier: ":hover",
    });
  });
  it("hope i have them when menu is closed", () => {
    renderTheme(<MenuIcon check={false} />);
    const spanMenuIcon = screen.getByTestId("span-test");
    expect(spanMenuIcon).toHaveStyle({
      background: "#E5E7EB",
    });

    expect(spanMenuIcon).toHaveStyleRule("background", "#E5E7EB", {
      modifier: "::before",
    });
    expect(spanMenuIcon).toHaveStyleRule("top", "-0.6rem", {
      modifier: "::before",
    });
    expect(spanMenuIcon).toHaveStyleRule("bottom", "-0.6rem", {
      modifier: "::after",
    });
    expect(spanMenuIcon).toHaveStyleRule("background", "#E5E7EB", {
      modifier: "::after",
    });
  });

  it("Hope you have these styles when the input is  checked", () => {
    renderTheme(<MenuIcon check={true} />);
    const spanMenuIcon = screen.getByTestId("span-test");
    expect(spanMenuIcon).toHaveStyle({
      background: "#C11010",
    });
    expect(spanMenuIcon).toHaveStyleRule("background", "#C11010", {
      modifier: "::before",
    });
    expect(spanMenuIcon).toHaveStyleRule("background", "#C11010", {
      modifier: "::after",
    });
    expect(spanMenuIcon).toHaveStyleRule("top", "0", {
      modifier: "::before",
    });
    expect(spanMenuIcon).toHaveStyleRule("bottom", "0", {
      modifier: "::after",
    });
  });
});
