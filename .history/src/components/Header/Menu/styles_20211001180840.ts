import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LinkFor = styled.a`
  margin: 0 1rem;
  color: ${({ theme }) => theme.colors.white900};
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }

  &.active {
    color: var(--white);
  }

  &.active::after {
    content: "";
    height: 5px;
    border-radius: 5px 5px 0 0;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.red700};
  }
`;