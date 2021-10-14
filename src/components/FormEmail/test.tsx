import FormEmail from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<FormEmail />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<FormEmail />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});
