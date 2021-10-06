import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    background: ${theme.colors.mainBg};
    border-radius: ${theme.border.radius};
  `}
`;
export const PreTextLogo = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.Tangerine};
    font-size: 5rem;
    color: ${theme.colors.white};
  `}
  ${media.lessThan("small")`
    font-size: 3rem;
  `}
`;

export const ProTextLogo = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.Tangerine};
    font-size: 5rem;
    color: ${theme.colors.red800};
  `}
  ${media.lessThan("small")`
    font-size: 3rem;
  `}
`;
