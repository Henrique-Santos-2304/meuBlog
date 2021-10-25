import styled, { css } from "styled-components";
import { headeingProps } from ".";

export const Heading = styled.h1<headeingProps>`
  ${({ theme, colorText, paddingText, marginText, fontSizeText }) => css`
    position: relative;
    width: max-content;
    color: ${colorText ? colorText : theme.colors.primary};
    padding: ${paddingText ? paddingText : 0};
    margin: ${marginText ? marginText : 0};
    font-size: ${fontSizeText ? fontSizeText : theme.font.sizes.small};

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      height: 0.4rem;
      border-radius: 2rem;
      background: ${theme.colors.primary};
    }
  `}
`;
