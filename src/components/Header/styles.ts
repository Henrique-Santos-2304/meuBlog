import styled, { css } from "styled-components";

export const WrapperHeader = styled.header`
  max-width: ${({ theme }) => theme.grid.containerContent};
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  @media (min-width: ${({ theme }) => theme.media.medium}) {
    margin-left: 2rem;
  }
`;
export const ContentLogo = styled.div`
  padding: ${({ theme }) => theme.spacings.xxsmall} 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogoImage = styled.div`
  width: 3.4rem;
  height: 3.6rem;
  border-radius: 50%;
  position: relative;
  margin-right: 0.3rem;
`;
export const Logo = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxbiglarge};
    font-family: ${theme.font.family.Tangerine};
    color: ${theme.colors.effectsPrimary};

    font-weight: 800;
    span {
      color: ${theme.colors.secondary};
    }
  `}
`;
