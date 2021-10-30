import GoToTop from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<GoToTop />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<GoToTop />);
    expect(container).toMatchSnapshot();
  });
});
