/* eslint-disable prettier/prettier */
import styled, { css } from "styled-components";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export const ContentLink = styled.div`
  ${({ theme }) => css`
    svg {
      font-size: ${theme.font.sizes.xxlarge};
      border-radius: 50%;
    }
  `}
`;

export const WhatsIcon = styled(FaWhatsapp)`
  color: ${({ theme }) => theme.colors.greenIcons};
  border-radius: none;
`;
export const LinkedinIcon = styled(TiSocialLinkedinCircular)`
  color: ${({ theme }) => theme.colors.mainLight};
  font-size: 2.8rem;
`;
export const GithubIcon = styled(FaGithub)`
  background: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.mainLight};
  border: 0.2rem solid ${({ theme }) => theme.colors.mainDark};
`;
