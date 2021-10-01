import Main from "components/Main";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Main />;
    </ThemeProvider>
  );
}
