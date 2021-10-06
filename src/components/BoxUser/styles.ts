import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 4rem;
`;

export const ImageLogo = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.red800},
    0 0 10px ${({ theme }) => theme.colors.white};
`;
export const Heading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family.Tangerine};
    font-size: 5rem;
    margin-top: 2rem;
  `}
`;
