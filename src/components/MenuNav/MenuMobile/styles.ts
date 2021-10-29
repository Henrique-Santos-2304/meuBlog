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
    transition: all 0.5s ease-in-out;
    z-index: 10;
    background: rgba(0, 0, 0, 0.91);
    border-radius: 2rem 0 0 2rem;
    border: 0.5rem inset ${theme.colors.bgSecondary};
    border-right: 0;
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
    transition: all 0.3s ease-in-out;
    opacity: ${isVisible ? 1 : 0};
  `}
`;
export const Contenticon = styled.button`
  background: rgba(255, 255, 255, 0.55);
  padding: 0.3rem;
  position: fixed;
  top: 2rem;
  right: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
  cursor: pointer;
  transition: all.3s linear;
  &:hover {
    transform: translate(-5%, -5%);
    filter: brightness(0.7);
  }
`;
