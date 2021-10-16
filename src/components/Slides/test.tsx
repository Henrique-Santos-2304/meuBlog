import "match-media-mock";
import Slides from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<Slides />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Slides />);
    expect(container).toMatchSnapshot();
  });
});
