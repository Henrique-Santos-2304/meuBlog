import MenuLink from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<MenuLink />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<MenuLink />);
    expect(container).toMatchSnapshot();
  });
});
