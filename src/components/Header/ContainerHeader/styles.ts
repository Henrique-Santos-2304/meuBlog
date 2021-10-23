import styled, { css } from "styled-components";
import { MdOutlineDragIndicator } from "react-icons/md";

export const Wrapper = styled.header`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  padding: 0 2rem;
`;

export const PreText = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.family.Tangerine};
    font-size: 4.5rem;
    color: ${theme.colors.mainLight};
    span {
      color: ${theme.colors.textTitles};
    }

    @media (min-width: ${theme.media.medium}) {
      font-size: 5.2rem;
    }
  `}
`;

export const ButtonMenu = styled.button`
  cursor: pointer;
  transition: all 0.4s linear;
  &:hover {
    filter: brightness(0.7);
  }
`;

export const IconMenu = styled(MdOutlineDragIndicator)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.mainLight};
`;
