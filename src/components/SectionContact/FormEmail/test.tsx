import FormEmail from ".";
import { act, fireEvent, screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mocked } from "ts-jest/utils";
import emailjs from "emailjs-com";
import { mockMainContact } from "../MainContact/mockMainContact";

jest.mock("emailjs-com");

describe("<FormEmail />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<FormEmail {...mockMainContact} />);
    expect(container).toMatchSnapshot();
  });
  it("all fields of the imaginary form on the screen", () => {
    renderTheme(<FormEmail {...mockMainContact} />);
    const labelName = screen.getByText(/nome/i);
    const labelEmail = screen.getByText(/email/i);
    const labelMessage = screen.getByText(/mensagem/i);

    const inputName = screen.getByRole("textbox", {
      name: /nome/i,
    });
    const inputEmail = screen.getByRole("textbox", {
      name: /email/i,
    });
    const inputMessage = screen.getByRole("textbox", {
      name: /mensagem/i,
    });

    const buttonSubmit = screen.getByRole("button", { name: /enviar/i });
    expect(labelName).toBeInTheDocument();
    expect(labelEmail).toBeInTheDocument();
    expect(labelMessage).toBeInTheDocument();

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputMessage).toBeInTheDocument();

    expect(buttonSubmit).toBeInTheDocument();
  });
  it("should Have 3 alerts with 3 invalid fields", async () => {
    renderTheme(<FormEmail {...mockMainContact} />);
    const button = screen.getByRole("button", { name: /enviar/i });

    fireEvent.submit(button);
    expect(await screen.findAllByRole("alert")).toHaveLength(3);
  });

  it("should have sent message Sucess when the data is valid", async () => {
    jest.useFakeTimers();
    const mockEmaijs = mocked(emailjs);

    renderTheme(<FormEmail {...mockMainContact} />);
    fireEvent.input(screen.getByRole("textbox", { name: /nome/i }), {
      target: {
        value: "test",
      },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /mensagem/i }), {
      target: {
        value: "Mensagem",
      },
    });

    fireEvent.submit(screen.getByRole("button", { name: /enviar/i }));
    expect(await screen.queryAllByRole("alert")).toHaveLength(0);
    await mockEmaijs.sendForm.mockResolvedValueOnce({
      text: "OK",
      status: 200,
    });

    expect(await screen.findByText(/Enviado com sucesso/i)).toBeInTheDocument();
    act(() => {
      jest.runAllTimers(); // trigger setTimeout
    });

    expect(screen.queryByText(/Enviado com sucesso/i)).not.toBeInTheDocument();
  });
  it("should have sent message error when the data is invalid", async () => {
    jest.useFakeTimers();
    const mockEmaijs = mocked(emailjs);

    renderTheme(<FormEmail {...mockMainContact} />);

    fireEvent.input(screen.getByRole("textbox", { name: /nome/i }), {
      target: {
        value: "test",
      },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@mail.com",
      },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /mensagem/i }), {
      target: {
        value: "Mensagem",
      },
    });

    fireEvent.submit(screen.getByRole("button", { name: /enviar/i }));

    mockEmaijs.sendForm.mockRejectedValueOnce({ Error });

    expect(await screen.findByText(/Falha no envio/i)).toBeInTheDocument();

    act(() => {
      jest.runAllTimers(); // trigger setTimeout
    });
    expect(await screen.queryByText(/Falha no envio/i)).not.toBeInTheDocument();
  });
});
