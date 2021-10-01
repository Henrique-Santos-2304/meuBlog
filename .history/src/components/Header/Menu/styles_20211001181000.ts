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
  display: inline-block;
  height: 5rem;
  padding: 0 0.5rem;
  line-height: 5rem;
  font-size: 1.1rem;
  font-weight: 600;
  position: relative;
  color: #cccad1;
  transition: color 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  &.active {
    color: ${({ theme }) => theme.colors.red700};
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
