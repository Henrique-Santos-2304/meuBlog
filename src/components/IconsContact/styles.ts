import styled, { css } from "styled-components";

export const Li = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all 0.4s;

    &:hover {
      transform: scale(1.5);
      margin: 0 1rem;
      svg {
        font-size: 2rem;
        &#github {
          font-size: 1.8rem;
        }
        &#linkedin {
          font-size: 2rem;
        }
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top right, #a2afb3 20%, #47494f, #111 70%);
      box-shadow: 0 0 20px orange;
      z-index: -1;
      border-radius: 50%;
      transform: translate(100%, 100%);
      transition: all 0.4s;
      & a {
        color: white;
      }
    }
    &:hover::before {
      transform: translate(0);
      animation: animate 0.4s linear;
    }
    svg {
      cursor: pointer;
      font-size: 2.4rem;
      border-radius: 50%;

      &#github {
        background: ${theme.colors.black900};
        color: ${theme.colors.white};
        border: 0.2rem solid ${theme.colors.black900};
      }
      &#linkedin {
        color: ${theme.colors.white};
        font-size: 2.8rem;
      }
      &#email {
        color: ${theme.colors.yellow};
      }
      &#whatsapp {
        color: #53c65f;
        border-radius: none;
      }
    }
    @keyframes animate {
      0%,
      100% {
        width: 100%;
        height: 100%;
      }
      50% {
        width: 50%;
        height: 50%;
      }
    }
  `}
`;
