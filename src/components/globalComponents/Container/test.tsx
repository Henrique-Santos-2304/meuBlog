import Container from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

describe("<Container />", () => {
  it("should render ", () => {
    const { container } = renderTheme(
      <Container asHeight="small">
        <p>Teste</p>
      </Container>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId(/containerScreen/i)).toHaveStyle({
      "min-height": "5vh",
    });
  });
});
