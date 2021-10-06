import styled, { css } from "styled-components";
import media from "styled-media-query";

export const ContentBody = styled.div`
  width: 100vw;
  height: 8rem;
  background: ${({ theme }) => theme.colors.mainBg};
`;
export const Wrapper = styled.header`
  ${({ theme }) => css`
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
