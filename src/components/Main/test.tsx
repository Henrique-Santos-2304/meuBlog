import { renderTheme } from "utils/testRenderTheme";
import Main from ".";

describe("Main", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Main />);
    expect(container).toMatchSnapshot();
  });
});
