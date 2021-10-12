import BoxMain from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<BoxMain />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<BoxMain />);
    expect(container).toMatchSnapshot();
  });
});
