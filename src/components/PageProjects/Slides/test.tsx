import "match-media-mock";
import Slides from ".";
import { renderTheme } from "utils/testRenderTheme";
import { mockTypes } from "./mockTypes";

describe("<Slides />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Slides {...mockTypes} />);
    expect(container).toMatchSnapshot();
  });
});
