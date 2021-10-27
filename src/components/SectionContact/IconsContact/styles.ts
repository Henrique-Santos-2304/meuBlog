import styled, { css } from "styled-components";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
  margin-bottom: 2rem;
  background: rgba(0, 0, 0, 0.55);
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
`;
export const Anchor = styled.a.attrs({ target: "_blank" })`
  cursor: pointer;
`;
export const Github = styled(FaGithub)`
  ${({ theme }) => css`
    height: max-content;
    color: ${theme.colors.primary};
    background: ${theme.colors.secondary};
    font-size: 2.4rem;
    border: 0.1rem solid ${theme.colors.secondary};

    border-radius: 50%;
    margin: 0 1rem;
  `}
`;
export const Linkedin = styled(FaLinkedinIn)`
  ${({ theme }) => css`
    height: max-content;
    color: ${theme.colors.primary};
    background: #0a66c2;
    border: 0.1rem solid ${theme.colors.primary};
    border-radius: 50%;
    padding: 0.3rem;
    font-size: 2.6rem;
    margin: 0 1rem;
  `}
`;

export const contentWhatsapp = styled.div``;
export const Whatsapp = styled(FaWhatsapp)`
  font-size: 3rem;
  color: #42bd51;
  margin: 0 1rem;
`;
