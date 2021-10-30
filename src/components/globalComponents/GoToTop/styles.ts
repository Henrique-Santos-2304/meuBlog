import styled from "styled-components";
import { FiChevronUp } from "react-icons/fi";
export const Wrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 3rem;
  background: rgba(0, 0, 0, 0.65);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s linear;
  &:hover {
    border: 0.1rem solid ${({ theme }) => theme.colors.primary};
    filter: brightness(0.9);
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    bottom: 4rem;
    right: calc(50% - 30rem);
    transform: translateX(-50%);
  }
`;
export const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled(FiChevronUp)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3.2rem;
`;
