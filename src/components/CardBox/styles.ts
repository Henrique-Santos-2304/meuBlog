import styled, { css } from "styled-components";
export const Icon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    font-size: ${theme.font.sizes.xlarge};
  `}
`;
export const Span = styled.div`
  width: 70px;
  height: 0.3rem;
  margin: 0.7rem auto;
  background: orange;
`;
export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: ${theme.colors.black800};
    font-size: ${theme.font.sizes.small};
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
  `}
`;
