import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black800};
  width: 100%;
  height: 8rem;
  padding: 3rem;
`;
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;