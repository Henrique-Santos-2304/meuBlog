import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { stylesThemeGlobals } from "../types/typesStylesTheme";

const GlobalStyles = createGlobalStyle`

/* roboto-regular - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/roboto-v29-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/roboto-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/roboto-v29-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/roboto-v29-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/roboto-v29-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
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
