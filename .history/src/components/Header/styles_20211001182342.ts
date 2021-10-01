import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black800};
  width: 100%;
  height: 8rem;
`;
export const MenuContainer = styled.div`
  margin: 0 auto;
  height: 8rem;
  padding: 0.7rem 3rem;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white900};
  border-radius: 2rem;
`;
