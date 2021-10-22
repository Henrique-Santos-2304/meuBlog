import CardSkilss from ".";
import { renderTheme } from "utils/testRenderTheme";
import { mockTypesSkillss } from "./mockTypesSkilss";

describe("<CardSkilss />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<CardSkilss {...mockTypesSkillss} />);
    expect(container).toMatchSnapshot();
  });
});
