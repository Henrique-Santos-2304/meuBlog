import { screen } from "@testing-library/react";
import "jest-styled-components";
import { renderTheme } from "styles/testRenderTheme";
import { theme } from "../../styles/theme";

import Main from ".";

describe("<Main />", () => {
  it("should render the heading", () => {
    renderTheme(<Main />);

    expect(
      screen.getByRole("heading", { name: /Henrique dos Santos/i })
    ).toBeInTheDocument();
  });

  it("should render the colors correctly", () => {
    renderTheme(<Main />);

    expect(screen.findByDisplayValue).toHaveStyleRule(
      "background-color",
      theme.colors.black800
    );
    //   // expect(container.firstChild).toHaveStyle({ "background-color": "#06092b" });
    // });
  });
});
