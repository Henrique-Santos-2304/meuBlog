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
  links: {
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

describe("<ImageUserMain />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<ImageUserMain {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it("should have a image on the screen ", () => {
    renderTheme(<ImageUserMain {...mock} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
