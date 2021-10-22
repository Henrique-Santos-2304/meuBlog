import "match-media-mock";
import SlideSkilss from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<SlideSkilss />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<SlideSkilss />);
    expect(container).toMatchSnapshot();
  });
});
