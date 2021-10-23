import styled from "styled-components";

export const PhotoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -4rem;

  @media (min-width: ${({ theme }) => theme.media.medium}) {
    margin-top: -5rem;
  }
`;

export const ImageUser = styled.img`
  width: 16rem;
  height: 16rem;
  object-fit: cover;
  border-radius: 50%;
`;
