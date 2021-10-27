import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;
export const ModalForm = styled.div`
  width: max-content;
  position: absolute;
  top: -1rem;
  left: 50%;
  padding: 0.6rem 1.4rem;
  transform: translateX(-50%);
  font-size: 1.4rem;
  background: rgba(255, 255, 255, 0.15);
  color: ${({ theme }) => theme.colors.effectsPrimary};
  text-align: center;
  border-radius: 0.5rem;
`;
export const Form = styled.form`
  padding: 3rem 0.5rem;
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Inputs = styled.input`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    border-bottom: 0.1rem solid ${theme.colors.secondary};
    font-size: 0.8rem;
    background: transparent;
    border-radius: 0.7rem;
    text-align: start;
    color: ${theme.colors.primary};
    transition: all 0.3s linear;

    ::placeholder {
      color: rgba(0, 0, 0, 0.45);
    }
    &:hover {
      transform: translateY(-3%);
    }
    &:hover,
    &:focus {
      background: rgba(255, 255, 255, 0.1);
      border: 0.1rem solid ${theme.colors.effectsPrimary};
    }
  `}
`;

export const TextAreas = styled.textarea.attrs({
  cols: 21,
  rows: 6,
})`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    overflow: hidden;
    border: 0;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0.6rem;
    transition: all 0.3s linear;
    color: ${theme.colors.primary};
    &:hover {
      transform: translateY(-3%);
    }
    ::placeholder {
      color: rgba(0, 0, 0, 0.45);
    }
    &:focus {
      border: 0.1rem solid ${theme.colors.effectsPrimary};
      outline: none;
    }
  `}
`;
export const Button = styled.button`
  ${({ theme }) => css`
    padding: 0.5rem ${theme.spacings.xsmall};
    background: transparent;
    color: ${theme.colors.effectsPrimary};
    font-weight: 700;
    border-radius: 0.5rem;
    border: 0.1rem solid ${theme.colors.effectsPrimary};
  `}
`;
