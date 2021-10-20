import ImageUserMain from ".";
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
    alt: "photo",
    ariaLabel: "uma img qualquer",
    imageUser: {
      name: "photo",
      url: "img.imagen.png",
    },
  },
};

describe("<ImageUserMain />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<ImageUserMain {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it("should have a image on the screen ", () => {
    renderTheme(<ImageUserMain {...mock} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  it("should have as link for my Contacts and portfólio ", () => {
    renderTheme(<ImageUserMain {...mock} />);
    expect(screen.getByLabelText(/Link Para meu Github/i)).toBeInTheDocument();
    expect(
      screen.queryByLabelText(/Link Para meu Linkedin/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByLabelText(/Envio de email via site/i)
    ).toBeInTheDocument();
  });
});
