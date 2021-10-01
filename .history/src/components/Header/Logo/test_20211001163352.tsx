import { render, screen } from "@testing-library/react";

import Logo from ".";

describe("<Logo />", () => {
  it("should render the heading", () => {
    const { container } = render(<Logo />);

    expect(
      screen.getByRole("heading", { name: /Henrique dos Santos/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
