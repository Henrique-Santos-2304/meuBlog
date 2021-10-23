/* eslint-disable prettier/prettier */
import styled, { keyframes } from "styled-components";
import { MdEmail } from "react-icons/md";

const animate = keyframes`
   0%,
      100% {
        width: 100%;
        height: 100%;
      }
      50% {
        width: 0%;
        height: 0%;
      }
`;
export const WrapperIcons = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ancorage = styled.a.attrs({
  target: "_blank",
})``;
export const Li = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  margin: -1rem 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.4s ease-in;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
    margin: 0 1rem;
    svg {
      font-size: 1.8rem;
    }
    &:hover::before {
      transform: translate(0);
      animation: ${animate} 0.4s ease-in;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top right, #a2afb3 20%, #47494f, #111 70%);
      z-index: -1;

      transition: all 0.4s ease-in;
      transform: translate(50%, 50%);
    }
  }
`;
export const EmailIcon = styled(MdEmail)`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.textTitles};
`;
