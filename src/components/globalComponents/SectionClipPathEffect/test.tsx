import SectionClipPathEffect from ".";
import { screen } from "@testing-library/react";
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
  it("should not have margin ", () => {
    renderTheme(
      <SectionClipPathEffect>
        <p>Section Clip Path</p>
      </SectionClipPathEffect>
    );
    const effectClipPath = screen.getByTestId(/containerEffectClipPath/i);
    expect(effectClipPath).toHaveStyle({ "margin-top": 0 });
  });
  it("should  have margin ", () => {
    renderTheme(
      <SectionClipPathEffect mt="2rem">
        <p>Section Clip Path</p>
      </SectionClipPathEffect>
    );
    const effectClipPath = screen.getByTestId(/containerEffectClipPath/i);
    expect(effectClipPath).toHaveStyle({ "margin-top": "2rem" });
  });
});
