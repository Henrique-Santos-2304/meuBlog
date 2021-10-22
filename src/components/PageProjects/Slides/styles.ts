import styled from "styled-components";

export const Icons = styled.div`
  &.slick-prev {
    left: 0.5rem;
    z-index: 10;
  }
  &.slick-next {
    right: 2.8rem;
  }
  &::before {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.black900};
    transition: all 0.4s;
  }
  &:hover::before {
    font-size: 4.5rem;
  }
`;
export const Dots = styled.div`
  bottom: -5rem;
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
