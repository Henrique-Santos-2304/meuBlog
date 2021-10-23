import Container from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<Container />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Container />);
    expect(container).toMatchSnapshot();
  });
});
