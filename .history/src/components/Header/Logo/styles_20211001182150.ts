import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white900};
  border-radius: 2rem;
`;

export const Image = styled.div`
  width: 40px;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.9rem;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Tittle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white800};
    font-family: ${theme.font.family.Effect};
  `}
  font-size: 2.4rem
`;

export const Title2 = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red700};
  `}
`;

export const Name = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white800};
    font-family: ${theme.font.family.Lobster};
  `}
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
`;
