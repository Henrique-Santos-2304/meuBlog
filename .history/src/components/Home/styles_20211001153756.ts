import styled, { keyframes, css } from "styled-components";

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.black800};

  color: #fff;
  width: 100%;
  height: 100vh;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
