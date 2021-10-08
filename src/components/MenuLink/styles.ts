import styled, { css } from "styled-components";

export type MenuIsOpen = {
  isOpen: boolean;
};

export const Wrapper = styled.nav<MenuIsOpen>`
  ${({ theme, isOpen }) => css`
    width: ${theme.grid.containerContent};
    padding: ${theme.spacings.small};
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    box-shadow: 0 0 30px ${theme.colors.red800}, 0 0 10px ${theme.colors.white};
    backdrop-filter: blur(0.1rem);
    overflow: hidden;
    opacity: ${isOpen ? 1 : 0};
    transition: 1.2s ease-in-out;
    transform: ${isOpen ? "translateX(0)" : "translateX(100%)"};
    @media (max-width: 748px) {
      width: ${theme.grid.container};
      flex-direction: column;
      background: ${theme.colors.white};
      width: 100vw;
      height: 80vh;
      border-radius: 0;

      a {
        color: ${theme.colors.mainBg};
        font-size: 2.5rem;
        margin: ${theme.spacings.small} 0;
      }
    }
  `}
`;
export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 700;
    margin: 0 ${theme.spacings.xsmall} ;
    padding: 0 0.3rem;
    font-size: ${theme.font.sizes.xlarge};
    letter-spacing: 0.1rem;
    position: relative;
    transition: filter .3s ;

  @media (max-width: 1020px) {
   font-size: ${theme.font.sizes.medium}
}

    &:hover {

      &::after {
        content: "";
        position: absolute;
        bottom: -0.6rem;
        right: 0;
        height: 0.3rem;
        background: ${theme.colors.red800};
        animation: hoverAnimation .4s forwards  ;
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
  }
  `}
`;
