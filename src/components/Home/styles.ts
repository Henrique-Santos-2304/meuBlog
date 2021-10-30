import styled, { css } from "styled-components";
import Image from "next/image";

export const MyDescription = styled.section`
  ${({ theme }) => css`}
  max-width: ${theme.grid.containerContent};
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;


  @media ( min-width: ${theme.media.medium}){
    padding: 0 ${theme.spacings.small};
  }
  @media ( min-width: ${theme.media.medium}){
    padding: 0 ${theme.spacings.xxlarge} ;
  }
  `}
`;

export const ContentDescription = styled.article`
  ${({ theme }) => css`
    width: max-content;
    padding: 1rem 2.9rem 1rem 1.4rem;
    margin: 1rem 0 0 2rem;
    background: rgba(255, 255, 255, 0.15);
    color: ${theme.colors.secondary};
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    font-weight: 500;
    border-radius: 2rem;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      height: 80%;
      width: 0.3rem;
      background: ${theme.colors.effectsPrimary};
    }

    @media (min-width: ${theme.media.xmedium}) {
      margin-left: 15rem;
    }
  `}
`;

export const Welcome = styled.p`
  ${({ theme }) => css`
    margin-left: 1.3rem;
    span {
      color: ${theme.colors.effectsPrimary};
    }
  `}
`;

export const Name = styled.h1.attrs({
  title: "Meu Nome",
})`
  ${({ theme }) => css`
    text-align: start;
    font-size: 2.3rem;
    margin-left: 1.3rem;
    font-weight: 300;
    strong {
      color: ${theme.colors.effectsPrimary};
      font-style: italic;
    }
  `}
`;

export const Dev = styled.p`
  margin-left: 1.3rem;
`;

export const PhotoContent = styled.main`
  ${({ theme }) => css`}
  position: relative;
  width: 30rem;
  height: 41rem;
  align-self: flex-end;
  justify-self: flex-end;

  @media (min-width: ${theme.media.xmedium}) {
      margin-right: 10rem;

    }
  `}
`;

export const PhotoUser = styled(Image)``;
