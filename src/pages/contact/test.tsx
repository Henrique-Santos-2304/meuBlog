import SectionContact from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<SectionContact />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<SectionContact />);
    expect(container).toMatchSnapshot();
  });
  it("should have all items the form ", () => {
    renderTheme(<SectionContact />);
    expect(
      screen.getByRole("heading", { name: /contato/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/nome/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /nome/i })).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
    expect(screen.getByText(/mensagem/i)).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: /campo de digitação de mensagem/i,
      })
    ).toBeInTheDocument();
  });
  it("should have link for whatsapp and button send message email", () => {
    renderTheme(<SectionContact />);
    expect(
      screen.getByRole("button", {
        name: /enviar/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Envio de mensagem no Whatsapp/i)
    ).toBeInTheDocument();
  });
});
