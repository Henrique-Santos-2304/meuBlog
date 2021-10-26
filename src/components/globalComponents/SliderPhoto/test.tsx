import "match-media-mock";
import SliderPhoto from ".";
import { screen } from "@testing-library/react";
import { renderTheme } from "utils/testRenderTheme";

const mock = {
  images: [
    {
      img: "https://res.cloudinary.com/defnibbpl/image/upload/v1634679131/storybook_q1s5cl_dafe82d169.svg",
      title: "A primeira imagem do teste",
      buttonCode: "http:buttons.com",
    },
  ],
  marginBox: "1rem",
};
describe("<SliderPhoto />", () => {
  it("should have cards slides ", () => {
    const { container } = renderTheme(
      <SliderPhoto {...mock} slidesToShow={2} receptorCards="skilss" />
    );
    expect(container).toMatchSnapshot();
  });
  it("should have cards slides of the Skills ", () => {
    renderTheme(
      <SliderPhoto {...mock} slidesToShow={2} receptorCards="skilss" />
    );

    const cardSkills = screen.getByLabelText(
      /Linguagens,Frameworks ou bibliotecas dominadas/i
    );
    expect(cardSkills).toBeInTheDocument();
  });
  it("should have cards slides of the Projects ", () => {
    renderTheme(
      <SliderPhoto {...mock} slidesToShow={2} receptorCards="projects" />
    );

    const cardsProjects = screen.getByLabelText(/Titulo do projeto/i);
    expect(cardsProjects).toBeInTheDocument();
  });
});
