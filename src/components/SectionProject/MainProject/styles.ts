import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: ${theme.grid.containerContent};
    margin: 0 auto;
    height: max-content;
    padding: 1rem 0 3rem;
  `}
`;
export const ContentSlide = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin: 1rem auto;

    @media (min-width: ${theme.media.medium}) {
      padding: 0 ${theme.spacings.small};
      border-radius: 2rem;
    }
    @media (min-width: ${theme.media.xmedium}) {
      padding: 0 ${theme.spacings.large};
    }
  `}
`;
export const Title = styled.header`
  ${({ theme }) => css`
    @media (min-width: ${theme.media.medium}) {
      padding: 0 ${theme.spacings.small};
      margin: 0 auto;
    }
    @media (min-width: ${theme.media.xmedium}) {
      padding: 0 ${theme.spacings.large};
    }
  `}
`;
