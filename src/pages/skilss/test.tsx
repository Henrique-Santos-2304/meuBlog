import "match-media-mock";
import Skilss from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<Skilss />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Skilss />);
    expect(container).toMatchSnapshot();
  });
});
