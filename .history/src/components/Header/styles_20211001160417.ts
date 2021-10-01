import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.black800};

  color: #fff;
  width: 100%;
  height: 8rem;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Tittle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white800};
  `}
`;
export const Title2 = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red700};
  `}
`;
