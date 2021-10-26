import styled, { css } from "styled-components";
import Image from "next/image";

export const MyDescription = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 75vh;
`;

export const ContentDescription = styled.div`
  ${({ theme }) => css`
    width: max-content;
    padding: 1rem 2.9rem 1rem 1.4rem;
    margin: 2.4rem 0 0 2rem;
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

export const PhotoContent = styled.div`
  position: relative;
  width: 30rem;
  height: 44rem;
  align-self: flex-end;
  justify-self: flex-end;
`;

export const PhotoUser = styled(Image)``;
