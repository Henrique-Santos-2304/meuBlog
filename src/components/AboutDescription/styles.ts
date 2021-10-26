import styled, { css } from "styled-components";
export const ContentAbout = styled.div`
  height: max-content;
  padding: 1.8rem 0;
`;
export const TextDescription = styled.p`
  ${({ theme }) => css`
    margin-top: 1rem;
    font-size: ${theme.font.sizes.medium};
    font-weight: 500;

    strong {
      font-style: italic;
    }
  `}
`;
