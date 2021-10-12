import ImageUserMain from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<ImageUserMain />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<ImageUserMain />);
    expect(container).toMatchSnapshot();
  });
});
