import ImageUserMain from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockTypes } from "./mockImageUserProps";

jest.mock("@chakra-ui/react", () => {
  const originalModule = jest.requireActual("@chakra-ui/react");

  return {
    __esModule: true,
    ...originalModule,
    useMediaQuery: jest.fn().mockImplementation(() => [true]),
  };
});

describe("<ImageUserMain />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<ImageUserMain {...mockTypes} />);
    expect(container).toMatchSnapshot();
  });
  it("should have a image on the screen ", () => {
    renderTheme(<ImageUserMain {...mockTypes} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
