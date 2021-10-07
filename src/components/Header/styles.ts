import styled, { css } from "styled-components";
import media from "styled-media-query";

export const ContentBody = styled.div`
  max-width: ${({ theme }) => theme.grid.container};
  height: 8rem;
  background: ${({ theme }) => theme.colors.mainBg};
  position: relative;
  ${media.lessThan("medium")`
    width: 100vw;
  `}
`;
export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: relative;
    margin: 0 auto;
    height: 8rem;
    max-width: ${theme.grid.containerContent};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 3rem;
    background: ${theme.colors.mainBg};
    ${media.lessThan("medium")`
    max-width: 80rem;
    padding: 0.2rem 3rem;

  `}
    ${media.lessThan("small")`
    padding: 0.2rem 2rem;
  `}
  `}
`;
export const ContentMenuFull = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.grid.containerContent};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 748px) {
      max-width: ${theme.grid.container};
      position: absolute;
      top: 7rem;
      right: 0;
    }
  `};
`;
