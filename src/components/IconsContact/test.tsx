import IconsContact from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

const mock = {
  contacts: {
    email: {
      title: "icons",
      email: "henrique.multitech@gmail.com",
      ariaLabel: "Envio de email via site",
      id: "name",
    },
    linksSocials: [
      {
        url: "https://github.com/Henrique-Santos-2304",
        title: "github",
        imageIcon: {
          alternativeText: "teste",
          url: "alt.png",
        },
        name: "github",
        ariaLabel: "Link Para meu Github",
      },
      {
        url: "https://www.linkedin.com/in/henriquewebdeveloper/",
        title: "linkedin",
        imageIcon: {
          alternativeText: "teste",
          url: "alt.png",
        },
        name: "linkedin",
        ariaLabel: "Link Para meu Linkedin",
      },
      {
        url: "https://api.whatsapp.com/send?1=pt_br&phone=5511966365190",
        title: "whatsapp",
        imageIcon: {
          alternativeText: "teste",
          url: "alt.png",
        },
        name: "whatsapp",
        ariaLabel: "Envio de mensagem no Whatsapp",
      },
    ],
  },
};

describe("<IconsContact />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<IconsContact {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it("should links for redirect with click ", () => {
    renderTheme(<IconsContact {...mock} />);
    expect(screen.getByLabelText(/Link Para meu Github/i)).toHaveAttribute(
      "href",
      "https://github.com/Henrique-Santos-2304"
    );
    expect(screen.getByLabelText(/Link Para meu Linkedin/i)).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/henriquewebdeveloper/"
    );
    expect(
      screen.getByLabelText(/Envio de mensagem no Whatsapp/i)
    ).toHaveAttribute(
      "href",
      "https://api.whatsapp.com/send?1=pt_br&phone=5511966365190"
    );
    expect(
      screen.getByLabelText(/Envio de email via site/i)
    ).toBeInTheDocument();
  });
});
