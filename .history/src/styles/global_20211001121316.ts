import { createGlobalStyle, css } from "styled-components";

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
    font-size: 2.4rem;
  }
  button{
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.family.Grechen}
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
