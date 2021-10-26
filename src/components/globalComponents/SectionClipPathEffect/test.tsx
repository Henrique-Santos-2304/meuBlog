import SectionClipPathEffect from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<SectionClipPathEffect />", () => {
  it("should render ", () => {
    const { container } = renderTheme(
      <SectionClipPathEffect>
        <p>Section Clip Path</p>
      </SectionClipPathEffect>
    );
    expect(container).toMatchSnapshot();
  });
});
