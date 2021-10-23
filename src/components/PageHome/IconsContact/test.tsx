import IconsContact from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

import { mockTypesIconContacts } from "./mockIconsProps";

describe("<IconsContact />", () => {
  it("should render ", () => {
    const { container } = renderTheme(
      <IconsContact {...mockTypesIconContacts} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should links for redirect with click ", () => {
    renderTheme(<IconsContact {...mockTypesIconContacts} />);
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
