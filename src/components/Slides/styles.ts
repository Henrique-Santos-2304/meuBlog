import styled from "styled-components";

export const Icons = styled.div`
  &.slick-prev {
    left: -45px;
  }
  &::before {
    font-size: 4rem;
  }
`;
export const Dots = styled.div`
  bottom: -4rem;
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
          font-size: 2rem;
        }
      }
    }
  }
`;
