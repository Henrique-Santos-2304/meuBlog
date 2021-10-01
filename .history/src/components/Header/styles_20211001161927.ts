import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.black800};

  color: #fff;
  width: 100%;
  height: 8rem;
  padding: 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
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
    font-family: ${theme.font.family.Italliano};
  `}
  font-size: 3.2rem
`;
