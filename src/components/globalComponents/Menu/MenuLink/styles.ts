import styled, { css } from "styled-components";

export const Navigation = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WrapperLink = styled.div`
  ${({ theme }) => css`
    font-size: 1.8rem;
    position: relative;
    letter-spacing: 0.125rem;

    a {
      text-decoration: none;
      padding: 1rem 2rem;
      &:hover {
        :after {
          content: "";
          position: absolute;
          top: 4rem;
          right: 0;

          height: 0.5rem;
          border-radius: 0.6rem;
          background: ${theme.colors.yellow};
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
    }
  `}
`;
export const Link = styled.a``;
