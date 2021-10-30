import styled, { css } from "styled-components";
import { FaExclamationCircle } from "react-icons/fa";

export const ContentInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 0.6rem;
  margin: 0.6rem 0;
`;
export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin: 0.4rem;
    color: ${theme.colors.primary};

    @media (min-width: ${theme.media.xmedium}) {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
export const Alert = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.1rem ${theme.spacings.xxsmall};
    color: ${theme.colors.attention};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: 500;
    border-radius: 0.5rem;
    margin-top: 0.2rem;
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
