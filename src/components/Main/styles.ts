import styled, { css } from "styled-components";

export const ContentBody = styled.main`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    height: 84vh;
    background: ${theme.colors.mainBg};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.large};
  `}
`;

export const WrapperUser = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.grid.containerContent};
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const WrapperDescription = styled(WrapperUser)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    line-height: 5rem;
    p {
      font-size: ${theme.font.sizes.large};
      text-align: center;
    }
  `}
`;
