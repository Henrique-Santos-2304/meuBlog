import styled, { css } from "styled-components";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

type marginProps = {
  marginBox: string;
};
export const ContentSection = styled.div<marginProps>`
  ${({ theme, marginBox }) => css`
    max-width: (100%, ${theme.grid.containerContent});
    margin: ${marginBox};
    height: max-content;
    display: flex;
    flex-direction: column;

    @media (min-width: ${theme.media.medium}) {
      border-radius: 2rem;
    }
    @media (min-width: ${theme.media.xmedium}) {
      padding: 0 8rem;
    }
  `}
`;
export const ContentTitle = styled.header`
  ${({ theme }) => css`
    width: 100%;
    padding: 0.9rem 0;
    background: rgba(0, 0, 0, 0.84);

    @media (min-width: ${theme.media.medium}) {
      border-radius: 1rem 1rem 0 0;
    }
  `}
`;
export const TitleProject = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.effectsPrimary};
    font-style: italic;
  `}
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 25rem;
  position: relative;
`;

export const PhotoProject = styled(Image)``;

export const ContentButton = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    padding: 2rem 0;
    background: rgba(0, 0, 0, 0.84);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (min-width: ${theme.media.medium}) {
      border-radius: 0 0 1rem 1rem;
    }
  `}
`;
export const ButtonAbout = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: 700;
    color: ${theme.colors.secondary};
    background: ${theme.colors.effectsPrimary};
    padding: 1rem 2rem;
    border-radius: 1rem;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    &:hover {
      filter: brightness(0.7);
      border: 0.1rem solid ${theme.colors.primary};
    }
  `}
`;
export const ButtonCode = styled(ButtonAbout)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  `}
`;
export const Icon = styled(FaGithub)`
  ${({ theme }) => css`
    margin-right: 0.8rem;
    font-size: ${theme.font.sizes.large};
  `}
`;
