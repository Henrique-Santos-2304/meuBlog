import CardBox from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";
const props = {
  url: "test.jpg",
  title: "minha foto",
  subDescription: "description",
};

describe("<CarBox />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<CardBox {...props} />);
    expect(container).toMatchSnapshot();
  });
  it("should have a image on Card ", () => {
    renderTheme(<CardBox {...props} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  it("should have a title on Card ", () => {
    renderTheme(<CardBox {...props} />);
    expect(
      screen.getByRole("heading", { name: /minha foto/i })
    ).toBeInTheDocument();
  });
  it("should have a description project on Card ", () => {
    renderTheme(<CardBox {...props} />);
    expect(screen.getByText(/description/i)).toBeInTheDocument();
  });
  it("should have a button to view full project ", () => {
    renderTheme(<CardBox {...props} />);
    expect(
      screen.getByRole("button", { name: /ver projeto/i })
    ).toBeInTheDocument();
  });
  it("should have a button to view a code of the project ", () => {
    renderTheme(<CardBox {...props} />);
    expect(
      screen.getByRole("button", { name: /ver código/i })
    ).toBeInTheDocument();
  });
});
