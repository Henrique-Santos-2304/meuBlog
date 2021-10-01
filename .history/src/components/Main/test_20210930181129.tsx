import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";

import Main from ".";

describe("<Main />", () => {
  it("should render the heading", () => {
    render(<Main />);

    expect(
      screen.getByRole("heading", { name: /Henrique dos Santos/i })
    ).toBeInTheDocument();
  });

  // it("should render the colors correctly", () => {
  //   const { container } = render(<Main />);

  //   expect(container.firstChild).toHaveStyle({ "background-color": "#06092b" });
  // });
});
