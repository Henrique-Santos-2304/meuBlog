import styled, { css, keyframes } from "styled-components";

const animateLinkBefore = keyframes`
  0%{
    width: 0;

  }100%{
    width: 120%;

  }
`;

export const ContentLink = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
    margin: 1.5rem 0;
    position: relative;
    transition: all 0.4s ease-in-out;

    &:hover {
      &::before {
        content: "";
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translateX(-50%);
        width: 120%;
        height: 0.3rem;
        background: ${theme.colors.bgSecondary};
        animation: ${animateLinkBefore} 0.6s ease-in-out;
      }
    }
  `}
`;
