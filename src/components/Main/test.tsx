import { renderTheme } from "utils/testRenderTheme";
import Header from ".";

describe("Header", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Header />);
    expect(container).toMatchSnapshot();
  });
});
