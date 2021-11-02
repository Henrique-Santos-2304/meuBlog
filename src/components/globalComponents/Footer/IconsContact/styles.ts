import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export const animate = keyframes`
  0%,100%{
      width: 100%;
      height: 100%;
  }
  50%{
      width: 50%;
      height: 50%;
  }
`;
export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
`;
export const Linkedin = styled(FaLinkedinIn)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    background: #0a66c2;
    border: 0.1rem solid ${theme.colors.primary};
    border-radius: 50%;
    padding: 0.1rem;
    font-size: 2.4rem;
  `}
`;
export const ContentIcon = styled.div`
  cursor: pointer;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.3s;
  margin: 0 1.3rem;
  &:hover {
    transform: scale(1.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary} 70%
    );
    z-index: -1;
    border-radius: 50%;
    transform: translate(80%, 80%);
    transition: all 0.4s;
  }
  &:hover {
    &::before {
      transform: translate(0);
      animation: ${animate} 0.4s linear;
    }
  }
`;
export const Links = styled(Link)`
  margin: 1rem auto;
`;
export const Anchor = styled.a.attrs({ target: "_blank" })``;
export const Github = styled(FaGithub)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    background: ${theme.colors.secondary};
    font-size: 2.2rem;
    border: 0.1rem solid ${theme.colors.secondary};
    border-radius: 50%;
  `}
`;

export const contentWhatsapp = styled.div``;
export const Whatsapp = styled(FaWhatsapp)`
  font-size: 2.7rem;
  color: #42bd51;
`;
