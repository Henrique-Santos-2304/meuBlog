import { renderTheme } from "utils/testRenderTheme";
import Slug from "pages/projects/[slug]";

describe("<BoxMain />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Slug />);
    expect(container).toMatchSnapshot();
  });
});
