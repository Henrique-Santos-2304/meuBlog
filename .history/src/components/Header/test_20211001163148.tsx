// import { screen } from "@testing-library/react";
// import "jest-styled-components";
// // import { theme } from "../../styles/theme";
// import { renderTheme } from "styles/testRenderTheme";

// import Header from ".";

// describe("<Header />", () => {
//   it("should render the heading", () => {
//     renderTheme(<Header />);

//     expect(
//       screen.getByRole("heading", { name: /Henrique dos Santos/i })
//     ).toBeInTheDocument();
//   });

// it("should render the colors correctly", () => {
//   renderTheme(<Header />);

//   const headingDisplay = screen.getByRole("heading", {
//     name: /Henrique dos Santos/i,
//   }).parentElement;

//   expect(headingDisplay).toHaveStyle({
//     background: theme.colors.black800,
//   });
//   expect(headingDisplay).toMatchSnapshot();
// });

// it("should show the effect description", async () => {
//   renderTheme(<Header />);

//   await waitFor(
//     () => expect(screen.getByText(/Desenvolvedor Web/i)).toBeInTheDocument(),
//     { timeout: 3000 }
//   );
// });
// });
