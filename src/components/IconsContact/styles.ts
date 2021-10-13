import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    svg {
      font-size: 3rem;
      border-radius: 50%;
      cursor: pointer;

      &::hover {
        filter: brightness(0.8);
      }

      &#github {
        background: ${theme.colors.black900};
        color: ${theme.colors.white};
        border: 0.2rem solid ${theme.colors.black900};
      }
      &#linkedin {
        color: ${theme.colors.white};
        font-size: 3.6rem;
      }
      &#email {
        color: ${theme.colors.yellow};
        font-size: 3.2rem;
      }
      &#whatsapp {
        color: #53c65f;
        font-size: 3.2rem;
        border-radius: none;
      }
    }
  `}
`;
