import styled, { keyframes, css } from "styled-components";

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.black800};

  color: #fff;
  width: 100%;
  height: 100vh;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const textTitle = keyframes`
  from {color: transparent;}
  to {color: #f8f8f8}
`;

export const Tittle = styled.h1`
  animation: ${textTitle} 3s infinite linear;
  ${({ theme }) => css`
    color: ${theme.colors.white800};
    font-family: ${theme.font.family.Grechen};
  `}
  font-size: 5rem;
`;
`
