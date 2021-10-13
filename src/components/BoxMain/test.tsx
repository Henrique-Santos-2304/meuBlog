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
describe("<BoxMain />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<BoxMain />);
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<BoxMain />);
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

  it("should have as link for my Contacts and portfólio ", () => {
    renderTheme(<BoxMain />);
    expect(screen.getByLabelText(/Link Para meu Github/i)).toBeInTheDocument();
    expect(
      screen.queryByLabelText(/Link Para meu Linkedin/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByLabelText(/Envio de email via site/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByLabelText(/Envio de mensagem no Whatsapp/i)
    ).toBeInTheDocument();
  });
});
