import CardSkilss from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<CardSkilss />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<CardSkilss />);
    expect(container).toMatchSnapshot();
  });
});
