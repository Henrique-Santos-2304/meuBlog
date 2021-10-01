import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.black800};

  color: #fff;
  width: 100%;
  height: 8rem;
  padding: 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
