import styled, { css } from "styled-components";
import { CheckProps } from ".";

export const Wrapper = styled.div<CheckProps>`
  ${({ theme, check }) => css`
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    padding: 1rem;
    background-color: ${theme.colors.white};
    border: 0.2rem solid ${check ? theme.colors.red800 : theme.colors.gray};
  `}
`;

export const LineSpan = styled.span<CheckProps>`
  ${({ check, theme }) => css`
    display: block;
    width: 3rem;
    height: 0.3rem;
    position: relative;
    transition: 0.5s ease-in-out;
    background-color: ${check ? theme.colors.red800 : theme.colors.gray};

    &::after,
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.4s ease-in-out;
      background: ${check ? theme.colors.red800 : theme.colors.gray};
    }
    &:before {
      top: ${check ? "0" : "-1rem"};
    }
    &:after {
      bottom: ${check ? "0" : "-1rem"};
    }
    ${check &&
    css`
      transform: rotate(45deg);
      &:after,
      &:before {
        transform: rotate(90deg);
      }
    `}
  `}
`;
