import "match-media-mock";
import SectionProject from ".";

import { renderTheme } from "utils/testRenderTheme";

describe("<SectionProject />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<SectionProject />);
    expect(container).toMatchSnapshot();
  });
});
