import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  margin: 0 auto;
  width: ${({ theme }) => theme.grid.containerContent};
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 3rem;
`;
export const WrapperContent = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    position: fixed;
    bottom: 0;
  `}
`;
export const WrapperSocials = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xbiglarge};
    margin-left: 8rem;
  `}
`;
export const IconUp = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    transform: rotate(-90deg);
    margin-right: 8rem;
    cursor: pointer;

    svg {
      font-size: 6rem;
    }
  `}
`;
