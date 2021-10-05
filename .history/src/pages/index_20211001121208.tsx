import Main from "components/Main";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Main />;
    </ThemeProvider>
  );
}
