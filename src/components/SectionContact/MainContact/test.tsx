import MainContact from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockMainContact } from "./mockMainContact";

describe("<MainContact />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<MainContact {...mockMainContact} />);
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<MainContact {...mockMainContact} />);
    const title = screen.getByRole("heading", {
      name: /contato/i,
    });
    expect(title).toBeInTheDocument();
  });
});
