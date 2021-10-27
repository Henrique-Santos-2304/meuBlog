import MainContact from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<MainContact />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<MainContact />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
  });
  it("should render ", () => {
    renderTheme(<MainContact />);
    const title = screen.getByRole("heading", {
      name: /contato/i,
    });
    expect(title).toBeInTheDocument();
  });
});
