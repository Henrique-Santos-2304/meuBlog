import Menu from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<Menu />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Menu isOpen onClose={() => false} />);
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<Menu isOpen onClose={() => false} />);
  });
});
