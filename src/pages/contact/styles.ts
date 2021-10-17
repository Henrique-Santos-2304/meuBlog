import styled from "styled-components";

export const Flex = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;

  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: transform 0.4s;
  cursor: pointer;

  &:hover {
    transform: translate(-5%, -5%);
  }

  a {
    svg {
      font-size: 4rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
