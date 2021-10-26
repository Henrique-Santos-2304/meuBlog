import styled from "styled-components";
export const Wrapper = styled.div`
  height: max-content;
  padding: 1rem 0 3rem;
`;
export const Dots = styled.div`
  bottom: -3rem;
  ul {
    &:last-child {
      color: ${({ theme }) => theme.colors.effectsPrimary};
    }
    li {
      color: ${({ theme }) => theme.colors.effectsPrimary};
      &.slick-active {
        button {
          &::before {
            color: ${({ theme }) => theme.colors.effectsPrimary};
          }
        }
      }
      button {
        &::before {
          font-size: 2.3rem;
        }
      }
    }
  }
`;
