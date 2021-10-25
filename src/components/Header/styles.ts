import styled, { css } from "styled-components";
import { MdDragIndicator } from "react-icons/md";

export const WrapperHeader = styled.header`
  width: 100vw;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`;
export const ContentLogo = styled.a.attrs({
  href: "#",
  title: "logo",
})`
  padding: ${({ theme }) => theme.spacings.xsmall};
`;
export const Logo = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxbiglarge};
    font-family: ${theme.font.family.Tangerine};
    color: ${theme.colors.effectsPrimary};
    position: relative;
    font-weight: 800;
    span {
      color: ${theme.colors.secondary};
    }
    &::before {
      content: "";
      position: absolute;
      bottom: -0.4rem;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 0.3rem;
      background: ${theme.colors.effectsPrimary};
    }
  `}
`;

export const Icon = styled(MdDragIndicator).attrs({
  title: "Abrir Menu",
})`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxbiglarge};
    color: ${theme.colors.primary};
  `}
`;
