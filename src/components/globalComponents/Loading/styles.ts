import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem;

    h1 {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.xxbiglarge};
    }
  `}
`;
