import ThemeProvider from "styled-components"
import {theme} from "./theme"
export const renderTheme = (children) =>{
  //eslint-disable
  return render(
    <ThemeProvider theme={theme}>
    {children}
    </ThemeProvider>
  )
}
