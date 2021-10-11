import styled, { css } from "styled-components";
type openClose = { isOpen: boolean };
export const Wrapper = styled.div<openClose>`
  ${({ isOpen }) => css`
    display: ${isOpen ? "block" : "none"};
  `}
`;
