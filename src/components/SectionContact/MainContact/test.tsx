import MainContact from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<MainContact />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<MainContact />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
});
