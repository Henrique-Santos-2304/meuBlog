import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.mainBg};
    border-radius: ${theme.border.radius};
  `}
`;
export const PreTextLogo = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.Tangerine};
    font-size: 6rem;
    color: ${theme.colors.white};
  `}
`;

export const ProTextLogo = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.Tangerine};
    font-size: 6rem;
    color: ${theme.colors.red800};
  `}
`;
