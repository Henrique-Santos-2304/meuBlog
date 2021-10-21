/* eslint-disable @typescript-eslint/no-empty-function */
import BoxMain from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

jest.mock("@chakra-ui/react", () => {
  const originalModule = jest.requireActual("@chakra-ui/react");

  return {
    __esModule: true,
    ...originalModule,
    useMediaQuery: jest.fn().mockImplementation(() => [true]),
  };
});
const mock = {
  data: {
    name: "Henrique dos Santos",
    profission: "Desenvolvedor FrontEnd",
    platform: "Web, Mobile, Desktop",
    linksSocials: [],
    email: {
      title: "icons",
      email: "henrique.multitech@gmail.com",
      ariaLabel: "Envio de email via site",
      id: "name",
    },
  },
};
describe("<BoxMain />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<BoxMain {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<BoxMain {...mock} />);
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
