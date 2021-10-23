import "match-media-mock";
import Slides from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockTypes } from "./mockSlidesProps";

describe("<Slides />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Slides {...mockTypes} />);
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<Slides {...mockTypes} />);
    expect(screen.getByText(/Ver projetos/i)).toMatchSnapshot();
  });
});
