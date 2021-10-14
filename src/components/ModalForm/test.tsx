import ModalForm from ".";
import { renderTheme } from "utils/testRenderTheme";

describe("<ModalForm />", () => {
  it("should render ", () => {
    const { container } = renderTheme(<ModalForm />);
    expect(container).toMatchSnapshot();
  });
});
