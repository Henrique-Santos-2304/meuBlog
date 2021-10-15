import FormEmail from ".";
import { screen, fireEvent } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mocked } from "ts-jest/utils";
import emailjs from "emailjs-com";

jest.mock("emailjs-com");

describe("<FormEmail />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<FormEmail />);
    expect(container).toMatchSnapshot();
  });

  it("all fields of the imaginary form on the screen", () => {
    renderTheme(<FormEmail />);
    expect(screen.getByText(/nome/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/mensagem/i)).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: /nome/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: /email/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: /campo de digitação de mensagem/i,
      })
    ).toBeInTheDocument();
  });

  it("should Have 3 alerts with 3 invalid fields", async () => {
    renderTheme(<FormEmail />);
    const button = screen.getByRole("button", { name: /enviar/i });
    expect(button).toBeInTheDocument();

    fireEvent.submit(button);
    expect(await screen.findAllByRole("alert")).toHaveLength(3);
  });

  it("should have invalid name alert", async () => {
    renderTheme(<FormEmail />);
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@test.com",
      },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /nome/i }), {
      target: {
        value: "",
      },
    });
    fireEvent.input(
      screen.getByRole("textbox", { name: /campo de digitação de mensagem/i }),
      {
        target: {
          value: "asdasd",
        },
      }
    );
    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
  });

  it("should have invalid email alert", async () => {
    renderTheme(<FormEmail />);
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test",
      },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /nome/i }), {
      target: {
        value: "nome",
      },
    });
    fireEvent.input(
      screen.getByRole("textbox", { name: /campo de digitação de mensagem/i }),
      {
        target: {
          value: "message",
        },
      }
    );
    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
  });

  it("should have invalid message alert", async () => {
    renderTheme(<FormEmail />);
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: {
        value: "test@test.com",
      },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /nome/i }), {
      target: {
        value: "asdasdd",
      },
    });
    fireEvent.input(
      screen.getByRole("textbox", { name: /campo de digitação de mensagem/i }),
      {
        target: {
          value: "",
        },
      }
    );
    fireEvent.submit(screen.getByRole("button"));

    expect(await screen.findAllByRole("alert")).toHaveLength(1);
  });

  it("should have sent message Sucess when the data is valid", async () => {
    const mockEmaijs = mocked(emailjs);

    renderTheme(<FormEmail />);
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

    fireEvent.input(
      screen.getByRole("textbox", { name: /campo de digitação de mensagem/i }),
      {
        target: {
          value: "Mensagem",
        },
      }
    );

    fireEvent.submit(screen.getByRole("button", { name: /enviar/i }));
    expect(await screen.queryAllByRole("alert")).toHaveLength(0);
    await mockEmaijs.sendForm.mockResolvedValueOnce({
      text: "OK",
      status: 200,
    });

    expect(await screen.findByText(/Enviado com sucesso/i)).toBeInTheDocument();
  });
  it("should have sent message error when the data is invalid", async () => {
    const mockEmaijs = mocked(emailjs);

    renderTheme(<FormEmail />);
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

    fireEvent.input(
      screen.getByRole("textbox", { name: /campo de digitação de mensagem/i }),
      {
        target: {
          value: "Mensagem",
        },
      }
    );

    fireEvent.submit(screen.getByRole("button", { name: /enviar/i }));
    expect(await screen.queryAllByRole("alert")).toHaveLength(1);
    mockEmaijs.sendForm.mockRejectedValueOnce({ Error });

    expect(
      await screen.findByText(/Erro!Por favor verifique seus dados/i)
    ).toBeInTheDocument();
  });
});
