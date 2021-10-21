import CardBox from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockTypesBoxCard } from "./mockTypesBoxCards";

describe("<CarBox />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<CardBox {...mockTypesBoxCard} />);
    expect(container).toMatchSnapshot();
  });
  it("should have a image on Card ", () => {
    renderTheme(<CardBox {...mockTypesBoxCard} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  it("should have a title on Card ", () => {
    renderTheme(<CardBox {...mockTypesBoxCard} />);
    expect(
      screen.getByRole("heading", { name: /minha foto/i })
    ).toBeInTheDocument();
  });
  it("should have a button to view full project ", () => {
    renderTheme(<CardBox {...mockTypesBoxCard} />);
    expect(
      screen.getByRole("button", { name: /ver projeto/i })
    ).toBeInTheDocument();
  });
  it("should have a button to view a code of the project ", () => {
    renderTheme(<CardBox {...mockTypesBoxCard} />);
    expect(
      screen.getByRole("button", { name: /ver código/i })
    ).toBeInTheDocument();
  });
});
