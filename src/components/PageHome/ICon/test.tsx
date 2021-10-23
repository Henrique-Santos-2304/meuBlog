import ICon from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<ICon />", () => {
  it("should render ", () => {
    const { container } = renderTheme(
      <ICon name="whatsapp" title="11970707070" />
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByTitle(/11970707070/i)).toBeInTheDocument();
  });
});
