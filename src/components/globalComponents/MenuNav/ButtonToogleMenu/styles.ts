import styled, { css } from "styled-components";
import { MdDragIndicator } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

export const Wrapper = styled.div``;

export const IconOpen = styled(MdDragIndicator)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 2.8rem;
  `}
`;
export const IconClose = styled(FaTimes)`
  color: #a71123;
  font-size: 2.8rem;
`;
