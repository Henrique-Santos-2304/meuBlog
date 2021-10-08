import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: 84vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageLogo = styled.img`
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.red800},
    0 0 10px ${({ theme }) => theme.colors.white};
  @media (max-width: 1024px) {
    width: 16rem;
    height: 16rem;
  }
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.Tangerine};
    font-size: 5rem;
    margin-top: 2rem;
    @media (max-width: 1024px) {
      font-size: 4rem;
    }
  `}
`;
