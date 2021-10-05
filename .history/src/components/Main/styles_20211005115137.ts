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
const blinkTextCursor = keyframes`
  from {border-right-color: rgba(0, 0, 0, .75);}
  to {border-right-color: transparent}
`;

const textTitle = keyframes`
  from {color: transparent;}
  to {color: #f8f8f8}
`;

export const Tittle = styled.h1`
  animation: ${textTitle} 3s infinite linear;
  ${({ theme }) => css`
    color: ${theme.colors.white800};
    font-family: ${theme.font.family.Tangerine}
    font-size: ${theme.font.sizes.xxlarge};
  `}
  font-size: 5rem;
`;
export const Text = styled.p`
  margin-top: 2rem;
`;

export const TextCursor = styled.span`
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  /* display: inline; */

  /* A mágica acontece aqui */
  animation: ${blinkTextCursor} 3s infinite 3s normal;
`;
export const Container = styled.div`
  color: ${({ theme }) => theme.colors.red700};
  font-size: 3rem;
`;
