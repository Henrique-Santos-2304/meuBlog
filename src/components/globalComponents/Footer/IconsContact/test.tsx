import IconsContact from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockFooter } from "../mockFooter";

describe("<IconsContact />", () => {
  it("should render ", () => {
    const { container } = renderTheme(
      <IconsContact {...mockFooter.dataFooter} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<IconsContact {...mockFooter.dataFooter} />);
    const iconsLinks = screen.getAllByRole("link");
    expect(iconsLinks).toHaveLength(3);
  });
});
