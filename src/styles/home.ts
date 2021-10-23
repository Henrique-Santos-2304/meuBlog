import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(81vh - 4rem);
    align-items: center;
    justify-content: center;

    @media (min-width: ${theme.media.medium}) {
      flex-direction: row;
      justify-content: space-between;
      padding: 0 7rem;
    }
  `}
`;
