/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components";
import { mediasProps } from ".";

export const FlexMediaQuery = styled.div<mediasProps>`
  ${({ responsive, asWidth, show }) => css`
    display: none;
    @media (${responsive}: ${asWidth}) {
      display: ${show ? "block" : "none"};
    }
  `}
`;
