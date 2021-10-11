import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  padding: 0.3rem 2rem;
  background: transparent;
`;

export const PreText = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.Tangerine};
    font-size: ${theme.font.sizes.xxbiglarge};
    color: ${theme.colors.white};
    span {
      color: ${theme.colors.red800};
    }
  `}
`;