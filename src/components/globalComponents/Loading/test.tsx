import Loading from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<Loading />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Loading />);
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(<Loading />);
    const text = screen.getByText(
      /Carregando Dados aguarde só um momento Por favor.../i
    );
    expect(text).toBeInTheDocument();
  });
});
