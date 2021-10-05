// import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { fireEvent, screen } from "@testing-library/react";

import MenuIcon from ".";

describe("<Teste />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<MenuIcon check={false} />);

    expect(container).toMatchSnapshot();
  });
  it("Hope you have these styles when the input is not checked", () => {
    renderTheme(<MenuIcon check={false} />);
    expect(screen.getByTestId("span-test")).toBeInTheDocument();
    expect(screen.getByTestId("span-test").parentElement).toBeInTheDocument();
    expect(screen.getByTestId("span-test").parentElement).toHaveStyle({
      border: "0.2rem solid #524861",
    });
    expect(screen.getByTestId("span-test")).toHaveStyle({
      "background-color": "#524861",
    });
    expect(screen.getByTestId("span-test")).toHaveStyleRule("top", "-1rem", {
      modifier: "&:before",
    });
    expect(screen.getByTestId("span-test")).toHaveStyleRule("bottom", "-1rem", {
      modifier: "&:after",
    });
  });
  it("should state change with click menu ", () => {
    renderTheme(<MenuIcon check={false} />);
    fireEvent.click(screen.getByTestId("divClick"));
    expect(screen.getByTestId("span-test")).toHaveStyle({
      background: "#C11010",
    });
  });
  it("Hope you have these styles when the input is  checked", () => {
    renderTheme(<MenuIcon check={true} />);
    expect(screen.getByTestId("span-test")).toBeInTheDocument();
    expect(screen.getByTestId("span-test")).toHaveStyle({
      "background-color": "#C11010",
    });
    expect(screen.getByTestId("span-test").parentElement).toHaveStyle({
      border: "0.2rem solid #C11010",
    });
    expect(screen.getByTestId("span-test")).toHaveStyleRule("top", "0", {
      modifier: "&:before",
    });
    expect(screen.getByTestId("span-test")).toHaveStyleRule("bottom", "0", {
      modifier: "&:after",
    });

    // expect(screen.getByTestId("span-test")).toHaveStyleRule(
    //   "background-color",
    //   theme.colors.gray,
    //   {
    //     modifier: "&::after",
    //   }
    // );
    // expect(screen.getByTestId("span-test")).toHaveStyleRule("bottom", "-1rem", {
    //   modifier: "&::after",
    // });
    // expect(screen.getByTestId("span-test")).toHaveStyleRule(
    //   "background-color",
    //   theme.colors.gray,
    //   {
    //     modifier: "&::before",
    //   }
    // );
    // expect(screen.getByTestId("span-test")).toHaveStyleRule("top", "-1rem", {
    //   modifier: "&::before",
    // });
    // expect(screen.getByTestId("span-test").parentElement).toHaveStyleRule(
    //   "border",
    //   "0.2rem solid #524861"
    // );
  });

  // it("Hope you have these styles when the input is checked", async () => {
  //   renderTheme(<MenuIcon />);
  //   // expect(screen.getByTestId("span-test")).toHaveStyleRule(
  //   //   "background-color",
  //   //   theme.colors.red800,
  //   //   { modifier: ":checked" }
  //   // );
  //   await fireEvent.click(screen.getByTestId("menu-hamburguer"));
  //   expect(screen.getByTestId("menu-hamburguer")).toBeChecked();
  //   expect(screen.getByTestId("span-test")).toHaveStyleRule(
  //     "background-color",
  //     theme.colors.red800
  //   );
  //   expect(screen.getByTestId("span-test")).toHaveStyleRule(
  //     "background-color",
  //     theme.colors.red800,
  //     {
  //       modifier: "&::after",
  //     }
  //   );
  //   expect(screen.getByTestId("span-test")).toHaveStyleRule("bottom", "0", {
  //     modifier: "&::after",
  //   });
  //   expect(screen.getByTestId("span-test")).toHaveStyleRule(
  //     "background-color",
  //     theme.colors.red800,
  //     {
  //       modifier: "&::before",
  //     }
  //   );
  //   expect(screen.getByTestId("span-test")).toHaveStyleRule("top", "0", {
  //     modifier: "&::before",
  //   });
  //   expect(screen.getByTestId("div-test")).toHaveStyleRule(
  //     "border",
  //     "0.2rem solid #C11010"
  //   );
  // });
});
