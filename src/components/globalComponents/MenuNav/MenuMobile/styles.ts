import styled, { css } from "styled-components";

type menuVisible = {
  isVisible: boolean;
};

export const Wrapper = styled.div<menuVisible>`
  ${({ theme, isVisible }) => css`
    width: 100%;
    max-width: 32rem;
    height: ${isVisible ? "76vh" : 0};
    position: fixed;
    top: 50%;
    right: ${isVisible ? 0 : "-32rem"};
    transform: translateY(-50%);
    transition: all 0.6s ease-in-out;
    z-index: 11;
    background: rgba(0, 0, 0, 0.91);
    border-radius: 2rem 0 0 2rem;
    border: 0.5rem inset ${theme.colors.bgSecondary};
    border-right: 0;

    @media (min-width: ${theme.media.medium}) {
      top: ${isVisible ? "50%" : "-76vh"};
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 2rem;
      border: 0.5rem solid ${theme.colors.bgSecondary};
      max-width: ${isVisible ? "40rem" : 0};
    }
    @media (max-width: ${theme.media.medium}) {
      transform: translateY(-50%);
    }
  `}
`;

export const PhotoContainer = styled.div`
  ${({ theme }) => css`
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    margin: 1.3rem 0 2rem;
    position: relative;
    border-radius: 50%;
    border: 0.2rem groove ${theme.colors.bgSecondary};
    transition: transform 0.3s;

    img {
      border-radius: 50%;
    }
    &:hover {
      transform: translate(0, -10%);
    }
  `}
`;
export const MenuNav = styled.nav<menuVisible>`
  ${({ isVisible }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    opacity: ${isVisible ? 1 : 0};
  `}
`;
export const Contenticon = styled.button<menuVisible>`
  ${({ isVisible }) => css`
    background: ${isVisible ? "transparent" : "rgba(0, 0, 0, 0.65)"};
    padding: 0.3rem;
    position: fixed;
    top: 2.6rem;
    right: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 11;
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
      border: 0.1rem solid ${({ theme }) => theme.colors.primary};
      filter: brightness(0.9);
    }

    @media (min-width: ${({ theme }) => theme.media.medium}) {
      right: calc(50% - 30rem);
      transform: translateX(-50%);
    }
  `}
`;
export const ContainerFull = styled.div<menuVisible>`
  ${({ theme, isVisible }) => css`
    background: rgba(0, 0, 0, 0.55);
    height: ${isVisible ? "100vh" : 0};
    width: ${isVisible ? "100vw" : 0};
    position: fixed;
    top: ${isVisible ? 0 : "-100vh"};
    right: 0;
    transition: all 0.6s ease-in-out;
    z-index: 10;

    @media (max-width: ${theme.media.medium}) {
      top: 0;
      right: ${isVisible ? 0 : "-100vw"};
    }
  `}
`;
