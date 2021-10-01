import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { stylesThemeFonts } from "../types/typesStylesTheme";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background: ${({ theme }: stylesThemeColors) => theme.colors.white800};
    font-size: 2.4rem;
    font-family: ${({ theme }: stylesThemeFonts) => theme.font.family.Poppins}
  }
  h1,h2,h3,h4,h5,h6{
    font-size: 1.6rem;
    font-family: ${theme.font.family.RobotoMono};
  }
  button{
    cursor: pointer;
  }
  input{
    border: 0;
    padding-left: 0.7rem;
  }
  ul, ol{
    text-decoration: none;
  }
`;

export default GlobalStyles;
