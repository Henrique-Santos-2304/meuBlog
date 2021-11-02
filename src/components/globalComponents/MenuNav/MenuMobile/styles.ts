import styled, { css } from "styled-components";

type menuVisible = {
  isVisible: boolean;
};

export const Wrapper = styled.nav<menuVisible>`
  ${({ theme, isVisible }) => css`
    width: 100%;
    max-width: 42rem;
    height: 76vh;
    transition: all 0.6s ease-in-out;
    z-index: ${isVisible ? "15" : "-10"};
    background: rgba(0, 0, 0, 0.91);
    border-radius: 2rem 0 0 2rem;
    border: 0.5rem inset ${theme.colors.bgSecondary};
    border-right: 0;
    transition: all 0.5s ease-in-out;
    opacity: ${isVisible ? 1 : 0};

    @media (min-width: ${theme.media.medium}) {
      border-radius: 2rem;
      border: 0.5rem solid ${theme.colors.bgSecondary};
    }
    @media (max-width: ${theme.media.medium}) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -2rem;
    }
    @media (max-width: ${theme.media.small}) {
      max-width: 30rem;
    }
  `}
`;

export const PhotoContainer = styled.div`
  ${({ theme }) => css`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    margin: 1.3rem 0 2rem;
    position: relative;
    border-radius: 50%;
    border: 0.2rem groove ${theme.colors.bgSecondary};
    transition: transform 0.3s;
    pointer-events: none;

    img {
      border-radius: 50%;
    }
    &:hover {
      transform: translate(0, -10%);
    }
  `}
`;
export const MenuNav = styled.div<menuVisible>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  ${({ isVisible }) => css`
    background: rgba(0, 0, 0, 0.65);
    height: 100vh;
    width: ${isVisible ? "100vw" : "35rem"};
    position: fixed;
    top: 0;
    right: 0;
    transition: all 0.5s ease-in-out;
    z-index: ${isVisible ? "10" : "-10"};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${isVisible ? 1 : 0};
  `}
`;
