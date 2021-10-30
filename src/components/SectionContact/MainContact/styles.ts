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
export const ContainerFooter = styled.footer`
  width: 100vw;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.55);
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
`;
