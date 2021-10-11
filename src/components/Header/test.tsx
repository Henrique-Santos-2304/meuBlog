import Header from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<Header />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Header />);
    expect(container).toMatchSnapshot();
  });
});
