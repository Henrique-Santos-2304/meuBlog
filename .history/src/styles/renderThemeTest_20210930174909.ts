import ThemeProvider from "styled-components"
import {theme} from "./theme"
export const renderTheme = (children) =>{
  return render(
    //eslint-disable
    <ThemeProvider theme={theme}>
    {children}
    </ThemeProvider>
  )
}
