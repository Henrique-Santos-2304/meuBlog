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
    background-image: linear-gradient(
      to left,
      ${theme.colors.bgGradient.gradientSmall},
      ${theme.colors.bgGradient.gradientLight},
      ${theme.colors.bgGradient.gradientMedium},
      ${theme.colors.bgGradient.gradientFull}
    );
    > div {
      min-height: ${asHeight ? asHeightDefined[asHeight] : asHeight};
    }
  `}
`;
export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.containerContent};
    padding: 2rem;
    margin: 0 auto;
  `}
`;
