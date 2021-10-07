import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 8rem;

  @media (max-width: 1020px) {
    margin: -1rem -0.5rem 0 0;
  }
  @media (max-width: 480px) {
    margin: -2rem -2rem 0 0;
  }
`;

export const ImageLogo = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.red800},
    0 0 10px ${({ theme }) => theme.colors.white};
  @media (max-width: 780px) {
    width: 11rem;
    height: 11rem;
  }
  @media (max-width: 480px) {
    width: 8rem;
    height: 8rem;
  }
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.Tangerine};
    font-size: 5rem;
    margin-top: 2rem;
    @media (max-width: 1020px) {
      font-size: 3rem;
    }
    @media (max-width: 480px) {
      font-size: 4rem;
    }
  `}
`;
