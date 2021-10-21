import styled from "styled-components";

export const Span = styled.span`
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
  :after {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 30%;
    height: 0.6rem;
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: 2rem;
  }
`;
