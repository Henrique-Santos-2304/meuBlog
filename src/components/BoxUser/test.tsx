import { renderTheme } from "utils/testRenderTheme";
import BoxUser from ".";
describe("BoxUser", () => {
  it("should render ", () => {
    const { container } = renderTheme(<BoxUser />);
    expect(container).toMatchSnapshot();
  });
});
