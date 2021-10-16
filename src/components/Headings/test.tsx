import Heading from ".";
import { renderTheme } from "utils/testRenderTheme";

const props = {
  msg: "teste",
  color: "orange",
  margin: "2rem",
};
describe("<Heading />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<Heading {...props} />);
    expect(container).toMatchSnapshot();
  });
});
