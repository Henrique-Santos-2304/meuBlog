import styled from "styled-components";

export const Dots = styled.div`
  bottom: -1rem;
  ul {
    &:last-child {
      color: orange;
    }
    li {
      color: orange;
      &.slick-active {
        button {
          &::before {
            color: orange;
          }
        }
      }
      button {
        &::before {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
