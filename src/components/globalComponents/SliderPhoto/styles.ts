import styled, { css } from "styled-components";
import Slider from "react-slick";

export const SliderBox = styled(Slider)`
  ${({ theme }) => css`
    position: relative;

    @media (min-width: ${theme.media.medium}) {
      border-radius: 2rem;
    }
  `}
`;
export const Dots = styled.div`
  bottom: -2.2rem;
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
