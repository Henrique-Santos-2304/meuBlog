import styled, { css } from "styled-components";

export const ContentSkilss = styled.section`
  ${({ theme }) => css`
    padding: 2rem 0;
    max-width: ${theme.grid.containerContent};
    margin: 0 auto;
    @media (min-width: ${theme.media.medium}) {
      padding: 2rem ${theme.spacings.small};
    }
    @media (min-width: ${theme.media.xmedium}) {
      padding: 2rem ${theme.spacings.large};
    }
  `}
`;

export const Span = styled.div`
  margin: 4.6rem 0;
`;
