import styled from "styled-components";

export const ContentBody = styled.div`
  width: ${({ theme }) => theme.grid.container};
  height: 84vh;
  background: ${({ theme }) => theme.colors.mainBg};
`;

export const Wrapper = styled.main`
  margin: 0 auto;
  background: url("https://res.cloudinary.com/defnibbpl/image/upload/v1633372258/gif_Bg_Main_80bf1894aa.gif")
    no-repeat;
  background-size: contain;
  max-width: ${({ theme }) => theme.grid.containerContent};
  height: 70vh;

  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;
