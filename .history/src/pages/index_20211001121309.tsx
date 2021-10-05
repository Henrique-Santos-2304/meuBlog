import Main from "components/Main";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import GlobalStyles from "styles/global";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Main />;
    </ThemeProvider>
  );
}
