import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LinkFor = styled.a`
  color: ${({ theme }) => theme.colors.white900};
  cursor: pointer;
  display: inline-block;
  line-height: 8rem;

  position: relative;
  transition: color 0.2s;

  &:hover {
    filter: brightness(0.8);
    font-size: 2rem;
  }
  & + a {
    margin-left: 3rem;
  }

  &.active {
    color: ${({ theme }) => theme.colors.green400};
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
  }

  &.active::after {
    content: "";
    height: 5px;
    border-radius: 5px;
    width: 100%;
    position: absolute;
    top: 0.4rem;
    left: 0;
    background: ${({ theme }) => theme.colors.green400};
  }
`;
