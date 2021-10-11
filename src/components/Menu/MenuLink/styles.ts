import styled, { css } from "styled-components";

export const Navigation = styled.nav``;
export const WrapperLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    position: relative;
    padding: 2.7rem 1rem;
  `}
`;
export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    padding: 1rem 2rem;
    &:hover {
      :after {
        content: "";
        position: absolute;
        bottom: 1.6rem;
        right: 0;

        height: 0.5rem;
        border-radius: 0.6rem;
        background: ${theme.colors.red800};
        animation: hoverAnimation 0.5s forwards;
      }
    }

    @keyframes hoverAnimation {
      from {
        width: 0;
        right: 50%;
      }
      to {
        width: 100%;
        right: 0;
      }
    }
  `}
`;
