import styled, { css, DefaultTheme } from "styled-components";

import { CheckProps } from ".";

const modifierStyleMenu = {
  checkIn: (theme: DefaultTheme) => css`
    background: ${theme.colors.red800};
    transform: rotate(45deg);
    &::after,
    &::before {
      transform: rotate(90deg);
      background: ${theme.colors.red800};
    }

    &::after {
      bottom: 0;
    }
    &::before {
      top: 0;
    }
  `,
  checkOut: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    &::after {
      background: ${theme.colors.white};
      bottom: -0.6rem;
    }
    &::before {
      background: ${theme.colors.white};
      top: -0.6rem;
    }
  `,
};

export const Wrapper = styled.div<CheckProps>`
  ${({ theme }) => css`

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    width: 4.125rem;
    height: 4.125rem;
    border-radius: 50%;

    background: ${theme.colors.mainBg};
    border: 0.155rem solid transparent;
    transition: 0.2s linear;
    &:hover {
      width: 4.65rem;
      height: 4.65rem;
  `}
`;

export const LineSpan = styled.span<CheckProps>`
  ${({ check, theme }) => css`
    display: block;
    width: 1.8rem;
    margin: 0 1rem;
    height: 0.2rem;
    position: relative;
    transition: 0.4s ease-in-out;
    ${check
      ? modifierStyleMenu.checkIn(theme)
      : modifierStyleMenu.checkOut(theme)}

    &::after,
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.4s ease-in-out;
    }
  `}
`;
