import CardBox from ".";
import { fireEvent, screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
import { mockTypesBoxCard } from "./mockBoxCardsProps";

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
      screen.getByRole("heading", { name: /projeto 1/i })
    ).toBeInTheDocument();
  });
  it("should a modal of the description is show with button click", () => {
    renderTheme(<CardBox {...mockTypesBoxCard} />);
    expect(
      screen.queryByLabelText(/descrição ds projeto selecionado/i)
    ).not.toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", {
        name: /ver projeto/i,
      })
    );

    expect(
      screen.getByLabelText(/descrição do projeto selecionado/i)
    ).toBeInTheDocument();
  });
});
