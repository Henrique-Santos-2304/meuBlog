import styled, { css } from "styled-components";
import { FaExclamationCircle } from "react-icons/fa";

export const Wrapper = styled.div``;
export const ContentInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: calc(${({ theme }) => theme.spacings.xxsmall} + 0.2rem);
`;
export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin: 0.4rem;
    color: ${theme.colors.primary};
  `}
`;
export const Alert = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem ${theme.spacings.xxsmall};
    color: ${theme.colors.attention};
    /* background: rgba(255, 255, 255, 0.25); */
    font-size: ${theme.font.sizes.xsmall};
    font-weight: 500;
    border-radius: 0.5rem;
    margin-top: 0.4rem;
  `}
`;
export const Icon = styled(FaExclamationCircle)`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    border-radius: 50%;
    font-size: ${theme.font.sizes.small};
    font-weight: 400;
    margin-right: 0.4rem;
  `}
`;
