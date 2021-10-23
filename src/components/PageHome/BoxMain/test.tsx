/* eslint-disable @typescript-eslint/no-empty-function */
import BoxMain from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockTypes } from "./mockBoxMain";

jest.mock("@chakra-ui/react", () => {
  const originalModule = jest.requireActual("@chakra-ui/react");

  return {
    __esModule: true,
    ...originalModule,
    useMediaQuery: jest.fn().mockImplementation(() => [true]),
  };
});

describe("<BoxMain />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<BoxMain {...mockTypes} />);
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<BoxMain {...mockTypes} />);
    expect(
      screen.getByRole("heading", {
        name: /henrique dos santos/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Desenvolvedor FrontEnd/i,
      })
    ).toBeInTheDocument();
  });
});
