import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { stylesThemeGlobals } from "../types/typesStylesTheme";

const GlobalStyles = createGlobalStyle`

/* Roboto */


/* Poppins */
/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/poppins-v15-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),url('/fonts/poppins-v15-latin-regular.woff2') format('woff2')
}
/* poppins-500italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 500;
  src: url('/fonts/poppins-v15-latin-500italic.eot'); /* IE9 Compat Modes */
  src: local(''),url('/fonts/poppins-v15-latin-500italic.woff2') format('woff2')
}
/* poppins-700italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 700;
  src: url('/fonts/poppins-v15-latin-700italic.eot'); /* IE9 Compat Modes */
  src: local(''),url('/fonts/poppins-v15-latin-700italic.woff2') format('woff2')
}


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
    font-size: 2rem;
    font-family: ${({ theme }: stylesThemeGlobals) => theme.font.family.Poppins}
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
