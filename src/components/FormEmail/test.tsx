import FormEmail from ".";
import { screen, fireEvent } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

jest.mock("emailjs-com", () => {
  return {
    emailjs: {
      sendForm: jest.fn(),
    },
  };
});

describe("<FormEmail />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<FormEmail />);
    expect(container).toMatchSnapshot();
    screen.logTestingPlaygroundURL();
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

  it("should have sent message when the data is valid", async () => {
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

    fireEvent.submit(screen.getByRole("button"));
    expect(await screen.queryAllByRole("alert")).toHaveLength(0);
  });
});
