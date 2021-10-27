import ContentInput from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

const mock = {
  error: "deu erro",
  typeLabel: "name",
  txtLabel: "Nome",
};
describe("<ContentInput />", () => {
  it("should render ", () => {
    const { container } = renderTheme(
      <ContentInput {...mock}>
        <p>Sou Children</p>
      </ContentInput>
    );
    expect(container).toMatchSnapshot();
  });
  it("should render ", () => {
    renderTheme(
      <ContentInput {...mock} error="">
        <p>Sou Children</p>
      </ContentInput>
    );
    const error = screen.queryByText(/deu erro/i);
    expect(error).not.toBeInTheDocument();
  });
});
