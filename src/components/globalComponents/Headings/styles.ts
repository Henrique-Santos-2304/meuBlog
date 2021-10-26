import styled, { css } from "styled-components";
import { headeingProps } from ".";

export const Heading = styled.h1<headeingProps>`
  ${({
    theme,
    colorText,
    paddingText,
    marginText,
    fontSizeText,
    colorEffect,
  }) => css`
    position: relative;
    width: max-content;
    color: ${colorText ? colorText : theme.colors.primary};
    padding: ${paddingText ? paddingText : 0};
    margin: ${marginText ? marginText : 0};
    font-size: ${fontSizeText ? fontSizeText : theme.font.sizes.small};
    font-family: ${theme.font.family.Roboto};

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -1.5rem;
      transform: translateY(-50%);
      width: 0.4rem;
      height: 90%;
      border-radius: 2rem;
      background: ${colorEffect ? colorEffect : theme.colors.effectsPrimary};
    }
  `}
`;
