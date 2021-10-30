import styled, { css, keyframes } from "styled-components";

const animateLinkBefore = keyframes`
  0%{
    width: 0
  }100%{
    width: 100%
  }
`;

export const ContentLink = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin: 1.5rem 0;
    position: relative;

    &:hover {
      &::before {
        content: "";
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translateX(-50%);
        height: 0.3rem;
        background: ${theme.colors.bgSecondary};
        animation: ${animateLinkBefore} 0.6s;
      }
    }
  `}
`;
