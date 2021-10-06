// import { screen } from "@testing-library/react";
import React from "react";
import { renderTheme } from "utils/testRenderTheme";
import { fireEvent, screen } from "@testing-library/react";
import "jest-styled-components";

import MenuIcon from ".";

describe("<Teste />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<MenuIcon check={false} />);

    expect(container).toMatchSnapshot();
  });
  it("should change style with event hover element ", () => {
    renderTheme(<MenuIcon check={false} />);

    expect(screen.getByTestId("divClick")).toHaveStyle({
      width: "4.125rem",
      height: "4.125rem",
      transition: "0.2s linear",
    });

    expect(screen.getByTestId("divClick")).toHaveStyleRule("width", "4.65rem", {
      modifier: ":hover",
    });
    expect(screen.getByTestId("divClick")).toHaveStyleRule(
      "height",
      "4.65rem",
      { modifier: ":hover" }
    );
  });
  it("hope i have them when menu is closed", () => {
    renderTheme(<MenuIcon check={false} />);

    expect(screen.getByTestId("span-test")).toHaveStyle({
      "background-color": "#E5E7EB",
    });
    expect(screen.getByTestId("span-test")).toHaveStyleRule(
      "background",
      "#E5E7EB",
      {
        modifier: "::before",
      }
    );
    expect(screen.getByTestId("span-test")).toHaveStyleRule("top", "-0.6rem", {
      modifier: "::before",
    });
    expect(screen.getByTestId("span-test")).toHaveStyleRule(
      "bottom",
      "-0.6rem",
      {
        modifier: "::after",
      }
    );
    expect(screen.getByTestId("span-test")).toHaveStyleRule(
      "background",
      "#E5E7EB",
      {
        modifier: "::after",
      }
    );
  });
  it("should state change with click menu in false", () => {
    renderTheme(<MenuIcon check={false} />);
    expect(screen.getByTestId("span-test")).toHaveStyle({
      background: "#E5E7EB",
    });
    fireEvent.click(screen.getByTestId("divClick"));
    expect(screen.getByTestId("span-test")).toHaveStyle({
      background: "#C11010",
    });
  });
  it("Hope you have these styles when the input is  checked", () => {
    renderTheme(<MenuIcon check={true} />);

    expect(screen.getByTestId("span-test")).toHaveStyle({
      "background-color": "#C11010",
    });
    expect(screen.getByTestId("span-test")).toHaveStyleRule(
      "background",
      "#C11010",
      {
        modifier: "::before",
      }
    );
    expect(screen.getByTestId("span-test")).toHaveStyleRule(
      "background",
      "#C11010",
      {
        modifier: "::after",
      }
    );
    expect(screen.getByTestId("span-test")).toHaveStyleRule("top", "0", {
      modifier: "::before",
    });
    expect(screen.getByTestId("span-test")).toHaveStyleRule("bottom", "0", {
      modifier: "::after",
    });
  });
  it("should state change with click menu in true ", () => {
    renderTheme(<MenuIcon check={true} />);
    expect(screen.getByTestId("span-test")).toHaveStyle({
      background: "#C11010",
    });
    fireEvent.click(screen.getByTestId("divClick"));
    expect(screen.getByTestId("span-test")).toHaveStyle({
      background: "#E5E7EB",
    });
  });
});
