import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 480px) {
    bottom: 2rem;
  }
`;
