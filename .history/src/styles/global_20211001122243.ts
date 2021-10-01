import { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: ${theme.colors.black700}
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-size: 2.4rem;
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
