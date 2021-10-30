import styled, { css } from "styled-components";
import { props } from ".";

export const CliPathContent = styled.div<props>`
  width: 100vw;
  padding: 2.4rem 1rem 4rem;
  background: white;
  margin-top: ${({ mt }) => (mt ? mt : 0)};
  margin-bottom: ${({ theme }) => theme.spacings.small};
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 90%);
`;

export const ContentResponsive = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.containerContent};
    margin: 0 auto;
    @media (min-width: ${theme.media.medium}) {
      padding: 0 ${theme.spacings.small};
    }
    @media (min-width: ${theme.media.xmedium}) {
      padding: 0 ${theme.spacings.large};
    }
  `}
`;
