import styled, { css } from "styled-components";
import { sizesProps } from ".";

const asHeightDefined = {
  small: "5vh",
  medium: "10vh",
  full: "81vh",
};
export const FullContainer = styled.div<sizesProps>`
  ${({ theme, asHeight }) => css`
    width: ${theme.grid.container};
    > div {
      min-height: ${asHeight && asHeightDefined[asHeight]};
    }
  `}
`;
export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.containerContent};
    margin: 0 auto;
  `}
`;
