import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: ${theme.grid.containerContent};
  `}
`;
export const ModalForm = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -1rem;
    left: 50%;
    padding: 0.6rem;
    transform: translateX(-50%);
    font-size: 1.4rem;
    background: rgba(255, 255, 255, 0.15);
    color: ${theme.colors.effectsPrimary};
    text-align: center;
    border-radius: 0.5rem;
  `}
`;
export const Form = styled.form`
  padding: 0.3rem 0.5rem;
  margin: 0rem auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Inputs = styled.input`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-bottom: 0.1rem solid ${theme.colors.secondary};
    font-size: 1.4rem;
    background: transparent;
    border-radius: 0.7rem;
    text-align: start;
    color: ${theme.colors.primary};
    transition: all 0.3s linear;

    ::placeholder {
      color: rgba(0, 0, 0, 0.45);
    }

    &:hover,
    &:focus {
      background: rgba(255, 255, 255, 0.1);
      border: 0.1rem solid ${theme.colors.effectsPrimary};
    }

    @media (min-width: ${theme.media.medium}) {
      width: 24rem;
    }
    @media (min-width: ${theme.media.xmedium}) {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const TextAreas = styled.textarea.attrs({
  cols: 25,
  rows: 5,
})`
  ${({ theme }) => css`
    width: 22rem;
    padding: ${theme.spacings.xxsmall};
    overflow: hidden;
    border: 0;
    font-size: 1.4rem;
    font-family: ${theme.font.family.Poppins};
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0.6rem;
    transition: all 0.3s linear;
    color: ${theme.colors.primary};

    ::placeholder {
      color: rgba(0, 0, 0, 0.45);
    }
    &:hover,
    &:focus {
      border: 0.1rem solid ${theme.colors.effectsPrimary};
      outline: none;
    }
    @media (min-width: ${theme.media.medium}) {
      width: 24rem;
    }
    @media (min-width: ${theme.media.xmedium}) {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
export const Button = styled.input`
  ${({ theme }) => css`
    margin-bottom: 0.3rem;
    padding: 0.5rem ${theme.spacings.xsmall};
    background: transparent;
    color: ${theme.colors.effectsPrimary};
    font-weight: 700;
    border-radius: 0.5rem;
    border: 0.1rem solid ${theme.colors.effectsPrimary};
    transition: all 0.4s ease-in-out;

    &:hover {
      color: ${theme.colors.primary};
      border: 0.1rem solid ${theme.colors.primary};
    }
  `}
`;
