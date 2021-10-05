import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import { stylesThemeGlobals } from "../types/typesStylesTheme";

const GlobalStyles = createGlobalStyle`

/* Roboto */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),url('/fonts/roboto-v29-latin-regular.woff2') format('woff2')
}

@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/roboto-v29-latin-italic.eot'); /* IE9 Compat Modes */
  src: local(''),url('/fonts/roboto-v29-latin-italic.woff2') format('woff2')
}

@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/roboto-v29-latin-500italic.eot'); /* IE9 Compat Modes */
  src: local(''),url('/fonts/roboto-v29-latin-500italic.woff2') format('woff2')
}

@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/roboto-v29-latin-700italic.eot'); /* IE9 Compat Modes */
  src: local(''),url('/fonts/roboto-v29-latin-700italic.woff2') format('woff2')
}

/* Poppins */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/poppins-v15-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),url('/fonts/poppins-v15-latin-regular.woff2') format('woff2')
}

@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/poppins-v15-latin-500italic.eot'); /* IE9 Compat Modes */
  src: local(''),url('/fonts/poppins-v15-latin-500italic.woff2') format('woff2')
}

@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/poppins-v15-latin-700italic.eot'); /* IE9 Compat Modes */
  src: local(''),url('/fonts/poppins-v15-latin-700italic.woff2') format('woff2')
}
 /* Tangerine */
@font-face {
  font-family: 'Tangerine';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/tangerine-v12-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),url('/fonts/tangerine-v12-latin-regular.woff2') format('woff2')
}

@font-face {
  font-family: 'Tangerine';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/tangerine-v12-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),url('/fonts/tangerine-v12-latin-700.woff2') format('woff2')
}

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    font-family: ${({ theme }) => theme.font.family.Poppins}  ;
  }
  h1,h2,h3,h4,h5,h6{
    font-size: 1.6rem;
    font-family: "Roboto", serif;
  }
  button{
    cursor: pointer;
  }
  input{
    border: 0;
    padding-left: 0.7rem;
    outline: none
  }
  ul, ol{
    list-style: none
  }
  a{
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
