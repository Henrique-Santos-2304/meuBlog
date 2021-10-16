import CardBox from ".";
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
});
