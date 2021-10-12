import IconsContact from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<IconsContact />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<IconsContact />);
    expect(container).toMatchSnapshot();
  });
});
