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
  line-height: 12rem;

  position: relative;
  transition: color 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
  & + a {
    margin-left: 3rem;
  }

  &.active {
    color: ${({ theme }) => theme.colors.red700};
  }

  &.active::after {
    content: "";
    height: 5px;
    border-radius: 5px 5px 0 0;
    height: 50%;
    width: 0.4rem;
    position: absolute;
    top: 20%;
    left: -2rem;
    background: ${({ theme }) => theme.colors.red700};
  }
`;
