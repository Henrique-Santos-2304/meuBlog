import Footer from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<Footer />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
