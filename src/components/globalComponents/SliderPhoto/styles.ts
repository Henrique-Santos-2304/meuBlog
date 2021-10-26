import styled from "styled-components";
import Slider from "react-slick";

export const SliderBox = styled(Slider)`
  position: relative;
`;
export const Dots = styled.div`
  bottom: -2.4rem;
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
