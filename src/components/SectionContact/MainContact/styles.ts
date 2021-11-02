import styled, { css } from "styled-components";
export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.containerContent};
    margin: 0 auto;
    padding-top: 0.5rem;

    h1 {
      text-align: center;
    }
    @media (min-width: ${theme.media.medium}) {
      padding: 2rem ${theme.spacings.small};
    }
    @media (min-width: ${theme.media.xmedium}) {
      padding: 2rem ${theme.spacings.large};
    }
  `}
`;
