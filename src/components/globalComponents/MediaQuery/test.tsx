import HandleMediaQuery from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<MediaQuery />", () => {
  it("should render in specified breakpoint with show is true ", () => {
    const { container } = renderTheme(
      <HandleMediaQuery responsive="max-width" asWidth="767px" show>
        <p>Media Query</p>
      </HandleMediaQuery>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId(/media-query/i)).toHaveStyleRule(
      "display",
      "block",
      {
        media: "(max-width:767px)",
      }
    );
  });
  it("should not render in specified breakpoint with show is false ", () => {
    renderTheme(
      <HandleMediaQuery responsive="max-width" asWidth="767px" show={false}>
        <p>Media Query</p>
      </HandleMediaQuery>
    );

    expect(screen.queryByTestId(/media-query/i)).toHaveStyleRule(
      "display",
      "none",
      {
        media: "(max-width:767px)",
      }
    );
  });
});
