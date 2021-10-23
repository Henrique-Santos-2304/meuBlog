import styled, { css } from "styled-components";
export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -7rem;
  margin-bottom: 2rem;
`;
export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.xxbiglarge} + 1rem);
    font-family: ${theme.font.family.Tangerine};
    text-align: center;
    color: ${theme.colors.textTitles};

    @media (min-width: ${theme.media.medium}) {
      font-size: ${theme.font.sizes.ultra};
    }
  `}
`;
export const Profission = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ theme }) => theme.colors.mainLight};
  margin-top: -1.3rem;
`;
export const Platforms = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.font.family.Poppins};
    font-size: ${theme.font.sizes.small};
    font-style: italic;
    color: ${({ theme }) => theme.colors.mainLight};
    margin: 0.8rem 0 2rem;
  `}
`;
export const EffectTopText = styled.span`
  width: 100%;
  position: relative;
  margin-bottom: 0.4rem;
  :after {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 30%;
    height: 0.6rem;
    background: ${({ theme }) => theme.colors.textTitles};
    border-radius: 2rem;
  }
`;
