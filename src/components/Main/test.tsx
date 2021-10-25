import { renderTheme } from "utils/testRenderTheme";
import { screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Header />);
    expect(container).toMatchSnapshot();
  });
  it("should my Description and photo ", () => {
    renderTheme(<Header />);
    const apresentation = screen.getByTestId(/apresentation/i);
    const name = screen.getByText(/henrique/i);
    const myImage = screen.getByRole("img", {
      name: /foto do desenvolvedor dono do portfólio/i,
    });

    expect(apresentation).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(myImage).toBeInTheDocument();
  });
});
